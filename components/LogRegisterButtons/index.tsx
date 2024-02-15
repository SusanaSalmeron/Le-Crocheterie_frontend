import { FC } from "react";
import styles from "../../styles/logRegisterButtons.module.css";
import { useRouter } from "next/navigation";


interface LogRegisterButtonsProps { }

const LogRegisterButtons: FC<LogRegisterButtonsProps> = () => {
    const router = useRouter()
    const onRedirect = () => {
        router.push('/loginOrRegister')
    }
    return (
        <div className={styles.buttons} data-testid="buttons">
            <button onClick={onRedirect}>Sign in or Register</button>

        </div>

    )
}

export default LogRegisterButtons;