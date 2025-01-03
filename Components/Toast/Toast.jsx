import React from 'react'
import styles from './Toast.module.css'

const Toast = ({ toast, setToast }) => {

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => {
                setToast(false)
            }, 3000);
            return () => clearTimeout(timer); // Cleanup on unmount
        }
    }, [toast]);

    return (
        toast.show && (
            <div className={styles.toast}>
                <div className={styles.toastContent}>
                    <p className={styles.message}>{toast.message}</p>
                    <button className={styles.closeButton} onClick={() => onClose(false)}>
                        &times;
                    </button>
                </div>
            </div>
        )
    )
}

export default Toast