const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create a new order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;
  
    const order = await Order.create({
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.user._id, //this is the id of the user that is logged in
    });
  
    res.status(201).json({
      success: true,
      order,
    });
  });

  exports.getSingleOrder = catchAsyncErrors(async(req,res,next) => {
    const order = await Order.findById(req.params.id).populate("user","name email");
    //order ke user me sirf ek id aati thi ab name email bhi aayega

    if(!order){
        return next(new ErrorHander("Order not found with this ID",404));
    }

    res.status(200).json({
        success: true,
        order,
    })
  })

  //get logged in user orders
  exports.myOrders = catchAsyncErrors(async(req,res,next) => {
    const order = await Order.find({user: req.user._id});

    if(!order){
        return next(new ErrorHander("Order not found with this ID",404));
    }

    res.status(200).json({
        success: true,
        order,
    })
  })

  //get all orders
  exports.getAllOrders = catchAsyncErrors(async(req,res,next) => {
    const orders = await Order.find();

    let totalAmount =0 ;

    orders.forEach(order => {
        totalAmount +=order.totalPrice;
    });

    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    })
  })

  //First we create an order using createOrder then using order id we update order id using status = Delivered which update orderStatus of order = Delivered  and Stock of product -1
  exports.updateOrder = catchAsyncErrors(async (req, res, next) => { 
    const order = await Order.findById(req.params.id);
  
    if (!order) {
      return next(new ErrorHander("Order not found with this Id", 404));
    }
  
    if (order.orderStatus === "Delivered") {
      return next(new ErrorHander("You have already delivered this order", 400));
    }
  
    if(req.body.status==="Shipped"){
      order.orderItems.forEach(async (o) => {
        await updateStock(o.product, o.quantity);
      });
    }
    
    order.orderStatus = req.body.status;
  
    if (req.body.status === "Delivered") {
      order.deliveredAt = Date.now();
    }
  
    await order.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
    });
  });
  
  async function updateStock(id, quantity) {
    const product = await Product.findById(id);
    // console.log(product);
    product.Stock -= quantity;
  
    await product.save({ validateBeforeSave: false });
  }

  // delete Order -- Admin
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  
  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  // await order.remove();
  await Order.deleteOne({_id: req.params.id} );
  res.status(200).json({
    success: true,
  });
});
