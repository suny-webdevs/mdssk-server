import LoginForm from "@/components/forms/LoginForm"
import styles from "./Home.module.css"

export default function Home() {
  return (
    <div className={styles.page_design}>
      <LoginForm />
    </div>
  )
}
