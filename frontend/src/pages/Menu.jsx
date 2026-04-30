import { useEffect, useState } from "react";
import { getMenu } from "../api/api";
import { useCart } from "../context/CartContext";

export default function Menu() {
    const [menu, setMenu] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        getMenu().then((res) => setMenu(res.data));
    }, []);

    return (
        <div style={{ padding: 10 }}>
            <h2>Menu</h2>

            {menu.map((item) => (
                <div
                    key={item.id}
                    style={{
                        border: "1px solid #ddd",
                        padding: 10,
                        marginBottom: 10,
                    }}
                >
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${item.price}</p>

                    <button onClick={() => addToCart(item)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}