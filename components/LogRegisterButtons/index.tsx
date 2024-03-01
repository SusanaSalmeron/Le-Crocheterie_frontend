import { FC } from "react";
import styles from "../../styles/logRegisterButtons.module.css";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../app/store/useCartStore";


interface LogRegisterButtonsProps { }

const LogRegisterButtons: FC<LogRegisterButtonsProps> = () => {
    const router = useRouter()
    const totalItemsInCart = useCartStore(state => state.totalItems)

    const onRedirect = (e: any) => {
        if (e.target.className === "fa-regular fa-user") {
            router.push('/loginOrRegister')
        }
        if (e.target.className === "fa-regular fa-heart") {
            router.push('/cart')
        }
        if (e.target.className === "fa-regular fa-envelope") {
            router.push('/contact')
        }
        if (e.target.className === "fa-solid fa-cart-shopping") {
            router.push('/cart')
        }

    }
    return (
        <div className={styles.buttons} data-testid="buttons">
            <button onClick={onRedirect} >
                <i className="fa-regular fa-user" />
            </button>
            <button onClick={onRedirect}>
                <i className="fa-regular fa-heart" />
            </button>
            <button onClick={onRedirect}>
                <i className="fa-regular fa-envelope" />
            </button>
            <button onClick={onRedirect}>
                <i className="fa-solid fa-cart-shopping">  <span>{totalItemsInCart}</span></i>
            </button>
        </div>

    )
}

export default LogRegisterButtons;