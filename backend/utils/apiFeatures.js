class ApiFeatures{
    constructor(query,queryStr) {
        this.query = query;
        this.queryStr= queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex : this.queryStr.keyword, //for searching abc you will also get abcdef
                $options: "i" //Case insensitive If you search ABC abc will also be found
            },

        }:{};
        // console.log(keyword);
        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr}
        //Removing some fields for category
        const removeField = ["keyword","page","limit"];

        removeField.forEach(key=>delete queryCopy[key]);
       

        //Filter for price and ratings
        // console.log(queryCopy)
        let queryStr = JSON.stringify(queryCopy);
        queryStr=queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        // console.log(queryStr);
        return this;

    }

    pagination(resultPerPage){
        const currentpage = Number(this.queryStr.page) || 1; 
        const skip = resultPerPage*(currentpage-1)
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports= ApiFeatures;