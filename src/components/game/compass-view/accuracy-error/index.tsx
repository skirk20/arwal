import CONFIG from '../../../../config';
import { useGeo } from '../../../../modules/geo';
import styles from './accuracy-error.module.scss';


export function AccuracyError() {

    const { accuracy } = useGeo();

    return <div className={styles.accuracyError}>
        <div className="inner">
            <h3>Zaczekaj chwilę, trwa kalibracja urządzenia!</h3>
            <p>
                Twoje urządzenie musi udostępniać lokalizację z dokładnością przynajmniej{'\u00A0'}<strong>{CONFIG.MIN_GEO_ACCURACY} metrów</strong>.
            </p>
            <p>
                Aktualna dokładność pomiaru: <strong>{Math.round(accuracy || 0)} metrów</strong>.
            </p>
        </div>
    </div>
}
