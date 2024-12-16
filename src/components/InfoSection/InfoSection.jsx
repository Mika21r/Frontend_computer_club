import styles from "./infoSection.module.css"
import infopic from "/public/infopic2.jpg"
import first_block_pic from "/public/speed_icon.svg"
import second_block_pic from "/public/cost_icon.svg"
import third_block_pic from "/public/location_icon.svg"

export default function InfoSection() {

    console.log(styles)
    return ( 
        <section className={styles['InfoSection']}>
            <div className="container">
                <div className={styles['Info_row']}>
                    <div className={styles['Info_text']}>
                        <h1>О нас</h1>
                        <p>Мы предлагаем широкий выбор игр на любой вкус, 
                            шутеров от первого лица и многопользовательских ролевых игр 
                            до стратегий в реальном времени и симуляторов. Независимо от того, 
                            являетесь ли вы опытным геймером или только начинаете свой путь в мире 
                            киберспорта, наш клуб предоставит вам все необходимое для незабываемого 
                            игрового опыта.<br/><br/>
                        Приходите к нам, соревнуйтесь, общайтесь и погружайтесь в захватывающий мир 
                        компьютерных игр в нашем первоклассном компьютерном клубе!</p>
                    </div>
                    <div className={styles['Info_pic']}><img src={infopic} alt="infopic"/></div>
                </div>
                <div className={styles['Information']}>
                    <div className={styles['Info_blocks']}>
                        <div className={styles['Info_block']}>
                            <div className={styles['block_pic']}><img src={first_block_pic} alt="block_pic"/></div>
                            <h2>Производительность</h2>
                            <hr style={{width: '80%', backgroundColor: '#d91e37', height: '1.25px', borderRadius: '5px'}} />
                            <p>В нашем компьютерном клубе вы сможете поиграть во многие популярные игры с максимальным комфортом, благодаря нашей высокопроизводительной технике</p>
                        </div>
                        <div className={styles['Info_block']}>
                            <div className={styles['block_pic']}><img src={second_block_pic} alt="block_pic"/></div>
                            <h2>Экономичные цены</h2>
                            <hr style={{width: '80%', backgroundColor: '#d91e37', height: '1.25px', borderRadius: '5px'}} />
                            <p>Здесь вы найдете лояльные и приятные цены. Благодаря низким ценам вы сможете провести дольше среди любимых компьютерных игр</p>
                        </div>
                        <div className={styles['Info_block']}>
                            <div className={styles['block_pic']}><img src={third_block_pic} alt="block_pic"/></div>
                            <h2>Удобное расположение</h2>
                            <hr style={{width: '90%', backgroundColor: '#d91e37', height: '1.25px', borderRadius: '5px'}} />
                            <p>Компьютерный клуб находятся в удобном местоположении, на доступном от дома расстоянии. Недалеко от компьютерого клуба имеются автобусные остановки</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}