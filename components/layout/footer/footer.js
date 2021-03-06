import Logo from './logo';

import { footerMenuItems } from '../../../store/menu-items';

import MenuItems from './menu-items';

import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.menus}>
          <MenuItems items={footerMenuItems} />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
