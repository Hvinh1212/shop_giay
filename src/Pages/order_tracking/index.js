import { Layout } from "antd";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import ContentOderTracking from "../../Components/Layout/Content_order_tracking";

function OrderTracking() {
    return (
        <Layout>
            <Header />

            <ContentOderTracking />

            <Footer />
        </Layout>
    );
}

export default OrderTracking;