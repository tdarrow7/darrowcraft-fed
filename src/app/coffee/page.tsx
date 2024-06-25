import { fetchAllCoffee } from "@/server/actions";

export default async function CoffeePage() {
    const coffee = await fetchAllCoffee();
    return (
        <div>
            <main>List of coffees</main>
            {coffee.length === 0 ? <p>Test</p>
            : <ul>
                {coffee?.map((c: any) => {
                    return (
                        <div key={c.id}>
                        <h2 className="text-2xl">{c.type}</h2>
                        <p className="text-sm">{c.description}</p>
                        </div>
                    )
                }
            )}
            </ul>
}
        </div>
    );
}