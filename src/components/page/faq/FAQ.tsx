import CenteredImage from "../../common/CenteredImage";
import MyTabs from "../tabs/MyTabs";
import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <CenteredImage src="/Frame.svg" alt="Logo" width={217} height={207} />
      <h2>FAQ</h2>
      <p>
        Welcome to our FAQ page! Here, you will find answers to the most
        commonly asked <br />
        questions about our services, products, and policies. If you need
        further assistance, <br /> please feel free to contact our support team.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBlock: "120px",
        }}
        className="myTabs"
      >
        <MyTabs />
      </div>
    </div>
  );
};

export default FAQ;
