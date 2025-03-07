import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <h1 className={styles.h1}>Lillede Andmebaas</h1>
            <div className={styles.buttons}>
                <h3>LISA</h3>
                <h3>KUSTUTA</h3>
                <h3>MUUDA</h3>
                <h3>OTSI</h3>
            </div>
        </div>
    )
}