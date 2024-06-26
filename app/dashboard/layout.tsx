import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from '../ui/dashboard/dashboard.module.scss'
import Footer from "../ui/dashboard/footer/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
