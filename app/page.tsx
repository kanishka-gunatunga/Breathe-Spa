import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div >
      <h1 className={`inriaSans ${styles.welcomeTxt}`}>Welcome</h1>
      <p className={`scheherazadeNew`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem cumque eveniet eligendi ipsam quibusdam dicta mollitia iusto ut repellat quae debitis molestiae perspiciatis, in cupiditate aut accusantium adipisci exercitationem doloribus! Corrupti ad nisi, dolorem voluptas a reprehenderit ullam. Aliquam maiores veniam mollitia nisi rem vero a facilis reprehenderit hic!</p>
      <Button />
    </div>
  );
}
