import { Layout } from "antd";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import ContentCart from "../../Components/Layout/Content_cart";

function Account() {
    return (
        <Layout>
            <Header />

            <ContentCart />

            <Footer />
        </Layout>
    );
}

export default Account;