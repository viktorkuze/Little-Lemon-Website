import React from "react";


const MenuCard = (props) => {
    return (
        <div className="menuContainer">
            <div className="sectionMenu">
                <div className="menu">Little Lemon Menu</div>
                    <h2>Italian</h2>
                    <h3>Pasta</h3>
                        <div className="item-name">
                            <div className="labelMenu">Bolognese</div>
                            <b>$11.50</b>
                            <div className="description">Bolognese sauce, minced beef,
                            Parmesan cheese and parsley </div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">Pollo e Limone</div>
                            <b>$12.50</b>
                            <div className="description">Cream sauce, grilled chicken, cherry tomatoes,
                                lemon, Parmesan cheese and parsley</div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">Salmone</div>
                            <b>$13.50</b>
                            <div className="description">Cream sauce, salmon, Parmesan cheese
                                and parsley </div>
                        </div>
                    <h3>Pizza</h3>
                        <div className="item-name">
                            <div className="labelMenu">Spicy Pepperone</div>
                            <b>$9</b>
                            <div className="description">Tomato sauce, mozzarella,
                                salami pepperone and chili pepper</div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">Quattro Formaggi</div>
                            <b>$12</b>
                            <div className="description">Cream sauce, mozzarella, gorgonzola,
                                provolone and Parmesan cheese</div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">Carpaccio</div>
                            <b>$12</b>
                            <div className="description">Carpaccio, rocket,
                                Parmesan cheese, pine nuts
                                and truffle mayonnaise</div>
                        </div>
                    <h2>Greek</h2>
                    <h3>Grill</h3>
                        <div className="item-name">
                            <div className="labelMenu">Mixed Grill</div>
                            <b>$21</b>
                            <div className="description">Souflaki, minced pork, chciken filet, lam chop, giros</div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">Giros</div>
                            <b>$18</b>
                            <div className="description">Roasted pork strips</div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">Samos</div>
                            <b>$19</b>
                            <div className="description">Suflaki, minced pork, chicken fillet, giros</div>
                        </div>
                    <h2>Turkish</h2>
                    <h3>Gözleme</h3>
                        <div className="item-name">
                            <div className="labelMenu">Mediterranean</div>
                            <b>$12</b>
                            <div className="description"> Grilled eggplant, grilled zucchini, grilled onion, chickpeas, young cheese</div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">The mexican</div>
                            <b>$13</b>
                            <div className="description">Minced beef or piri piri chicken, young cheese, kidney beans, jalapeños, corn</div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">Döner</div>
                            <b>$11</b>
                            <div className="description">Chicken döner, feta cheese, young cheese, spinach, corn, onion</div>
                        </div>
                    <h2>Mediterranean Deserts</h2>
                        <div className="item-name">
                            <div className="labelMenu">Tiramisu</div>
                            <b>$4.5</b>
                            <div className="description">A secret family tradition recipie</div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">Baklava</div>
                            <b>$4</b>
                            <div className="description">Dough, nuts, butter, sugar, honey, cinnamon, lemonjuice</div>
                        </div>
                        <div className="item-name">
                            <div className="labelMenu">Rizogalo</div>
                            <b>$4</b>
                            <div className="description">Greek rice pudding</div>
                        </div>
                </div>
            </div>
    )

};

export default MenuCard;
