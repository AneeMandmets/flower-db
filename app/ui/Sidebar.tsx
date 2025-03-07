import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <h1 className={styles.h1}>Lillede Andmebaas</h1>
            <div className={styles.buttons}>
                <h3 className={styles.button}>LISA</h3>
                <h3 className={styles.button}>KUSTUTA</h3>
                <h3 className={styles.button}>MUUDA</h3>
                <h3 className={styles.button}>OTSI</h3>
            </div>
        </div>
    )
}