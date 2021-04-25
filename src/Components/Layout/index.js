import styles from "./styles";
import Header from "./Header";

function Layout({ children }) {
    return (
        <div style={styles.root}>
            <Header />
            <div>
                {children}
            </div>

        </div>
    )
}
export default Layout;
