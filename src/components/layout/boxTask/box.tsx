import { PageHeader } from '../header/page-header';
import styles from './box.module.scss';

type Props = React.PropsWithChildren<{}>;

export default function Box({ children }: Props) {
    // window.location.replace(window.location.href)
    return <div>
        <div className={styles.header}><PageHeader /></div>
    <div className={styles.box}>
        
        <div className="inner">
            {children}
        </div>
    </div></div>
}
