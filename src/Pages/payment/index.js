import { Layout } from "antd";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import ContentPayment from "../../Components/Layout/Content_payment";

function Account() {
    return (
        <Layout>
            <Header />

            <ContentPayment />

            <Footer />
        </Layout>
    );
}

export default Account;