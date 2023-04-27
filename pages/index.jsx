import Head from "next/head";
import styles from "./index.module.css";
import InputText from "@/components/Form/InputText/InputText";
import InputNumber from "@/components/Form/InputNumber/InputNumber";
import SelectField from "@/components/Form/SelectField/SelectField";
import DateSelect from "@/components/Form/DateSelect/DateSelect";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Assam Skill Development Mission Project</title>
        <meta
          name="description"
          content="Assam Skill Development Mission Project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles["home-page"]}>
        <Header />
        <div className={styles.breadcrumb}>
          <div className={styles.breadcrumb__wrapper}>
            Skill Yatra Registration
          </div>
        </div>
        <form action="" className={styles.form}>
          <h4 className={styles.form__title}>Basic Details</h4>
          <div className={styles.form__row1}>
            <InputText Title="Name" />
            <InputText Title="Father’s Name" />
            <InputText Title="Mother’s Name" />
            <DateSelect Title="Date of Birth" />
            <SelectField Title="Gender" />
            <InputText Title="Mobile Number" />
            <InputText Title="School Name" />
            <InputText Title="Class" />
            <SelectField Title="Social Category" />
          </div>
          <div className={styles["hr__devider"]} />
          <h4 className={styles.form__title}>Resedential Address</h4>
          <div className={styles.form__row2}>
            <InputNumber Title="House No." />
            <InputText Title="Location" />
            <InputText Title="City / Town / Village" />
          </div>
          <div className={styles.form__row3}>
            <SelectField Title="State" />
            <InputText Title="District" />
            <InputNumber Title="Pincode" />
          </div>
          <div className={styles["hr__devider"]} />
          <h4 className={styles.form__title}>Family Details</h4>
          <div className={styles.form__row3}>
            <InputText Title="Father’s Occupation" />
            <InputText Title="Mother’s Occupation " />
            <InputText Title="Family Members" />
          </div>
          <div className={styles["hr__devider"]} />
          <h4 className={styles.form__title}>Counsellor Details</h4>
          <div className={styles.form__row3}>
            <InputText Title="Name of Counsellor" />
            <DateSelect Title="Date of Counselling" />
            <InputText Title="Remarks" />
          </div>
          <button className={styles["submit-btn"]} type="submit">
            Submit
          </button>
        </form>
        <Footer />
      </main>
    </>
  );
}
