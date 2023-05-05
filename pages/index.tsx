import React, { FC } from 'react';
import styles from '../styles/home.module.css';
import MainLayout from '../components/mainLayout';
import HomeCarousel from '../components/HomeCarousel';
import SectionTypes from '../components/SectionTypes';
/* import { useNavigate } from 'react-router-dom';
 */
interface HomeProps { }

const Home: FC<HomeProps> = () => {
    /*     const navigate = useNavigate()
     */
    const onCategory = (e: any) => {
        const category = e.target.alt
/*         navigate(`/products/${category}`)
 */    }
    return (
        <MainLayout>
            <div className={styles.home} data-testid="home">
                <div className={styles.carousel}>
                    <HomeCarousel />
                </div>
                <div className={styles.section}>
                    <section>
                        <h3>100%
                        </h3>
                        <h4>handmade</h4>
                    </section>
                    <section>
                        <h3>
                            100%
                        </h3>
                        <h4>made with love</h4>
                    </section>
                    <section>
                        <h3>
                            100%
                        </h3>
                        <h4>
                            charitable
                        </h4>
                    </section>
                </div>
                <div className={styles.types}>
                    <SectionTypes onCategory={onCategory} />
                </div>
            </div>
        </MainLayout>
    )
}
    ;

export default Home;
