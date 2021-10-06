import React from 'react';


class Products extends React.Component {
    render() {
        var { children } = this.props;
        return (
            /* <!-- Products --> */
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* <!-- Product --> */}
                    {children}
                </div>
            </section>
        );
    }

 
}

export default Products;
