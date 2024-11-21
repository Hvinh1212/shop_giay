import { Layout } from "antd";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import ContentOderManagement from "../../Components/Layout/Content_order_management";

function OrderTracking() {
    return (
        <Layout>
            <Header />

            <ContentOderManagement />

            <Footer />
        </Layout>
    );
}

export default OrderTracking;