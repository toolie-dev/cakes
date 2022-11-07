import s from "./Aside.module.css";

import Title from "../../../common/Title/Title";

const Aside = (props) => {
    return(
        <aside className={s.aside}>
            <Title otherClass="search">Шукаєш щось особливе?</Title>
            <div className={s.wrapper}>
                <div className={s.elem}>
                    <h2 className={s.title}>Тематика</h2>
                    <div className={s.wrap}>
                        <div className={s.item}>
                            <input className={s.input} id="forGirls" type="checkbox" />
                            <label className={s.label} htmlFor="forGirls">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>Для дівчат</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="forMen" type="checkbox" />
                            <label className={s.label} htmlFor="forMen">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>Для чоловіків</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="patriotic" type="checkbox" />
                            <label className={s.label} htmlFor="patriotic">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>Патріотичні</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="nuptial" type="checkbox" />
                            <label className={s.label} htmlFor="nuptial">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>Весільні</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="toTheBirthday" type="checkbox" />
                            <label className={s.label} htmlFor="toTheBirthday">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>До дня народження</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="corporate" type="checkbox" />
                            <label className={s.label} htmlFor="corporate">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>Корпоративні</div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={s.elem}>
                    <h2 className={s.title}>Особливості</h2>
                    <div className={s.wrap}>
                        <div className={s.item}>
                            <input className={s.input} id="classicRecipes" type="checkbox" />
                            <label className={s.label} htmlFor="classicRecipes">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>Класичні рецепти</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="glutenFree" type="checkbox" />
                            <label className={s.label} htmlFor="glutenFree">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>Без глютену</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="vegan" type="checkbox" />
                            <label className={s.label} htmlFor="vegan">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>Веганські</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="withoutSugar" type="checkbox" />
                            <label className={s.label} htmlFor="withoutSugar">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>Без цукру</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="withFruits" type="checkbox" />
                            <label className={s.label} htmlFor="withFruits">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>З фруктами</div>
                            </label>
                        </div>
                        <div className={s.item}>
                            <input className={s.input} id="withFlowers" type="checkbox" />
                            <label className={s.label} htmlFor="withFlowers">
                                <div className={s.square}>
                                    <div className={s.tick}>
                                        &#10004;
                                    </div>
                                </div>
                                <div className={s.text}>З квітами</div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Aside;