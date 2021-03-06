import MenuItem from './menu-item';

import styles from './menu-items.module.scss';

function MenuItemss({ items, onToggle }) {
  const menuItems = items.map(item => {
    const { title, items } = item;

    return (
      <div className={styles[title]} key={title}>
        <span className={styles.title}>{title}</span>
        <MenuItem items={items} handleToggle={onToggle} />
      </div>
    );
  });

  return <>{menuItems}</>;
}

export default MenuItemss;
