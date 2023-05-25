import './Product.css'
const Product = () => {
    return ( 
        <div className="product">
            <div className="product-inner">
                <p className="product-head">Product page</p>
                <p className="product-body">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, simili
                que sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita a animi, i
                distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
                </p>
                <div className="product-doc">
                    <p className="product-doc-head">Documentation</p>
                    <p className="product-doc-body">This will refer you to either <span>postman</span> or <span>readme</span> documentation</p>
                </div>
            </div>
        </div>
    );
}
 
export default Product;