import { Layout } from "antd";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import ContentAccount from "../../Components/Layout/Content_account";

function Account() {
    return (
        <Layout>
            <Header />

            <ContentAccount />

            <Footer />
        </Layout>
    );
}

export default Account;