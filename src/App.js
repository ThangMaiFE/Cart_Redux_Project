import React from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
import Footer from './components/Footer';


class App extends React.Component {
    render() {
        return (
            <div>
                {/* {!-- Header --} */}
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        {/* <!-- Products --> */}
                        <ProductsContainer />
                        {/* <!-- Message --> */}
                        <MessageContainer />
                        {/* <!-- Cart --> */}
                        <CartContainer />
                    </div>
                </main>
                {/* <!-- Footer --> */}
                <Footer />
            </div>
        );
    }
}

export default App;
