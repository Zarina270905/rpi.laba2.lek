export default function TariffCard({ tariff, accent = false }) {
  return (
    <div className={"tariff-card" + (accent ? " tariff-card--accent" : "")}>
      <div className="tariff-name">{tariff.name}</div>
      <div className="tariff-price">
        {tariff.price.toLocaleString("ru-RU")} ₽
      </div>
      <button className="btn-tariff">Выбрать</button>
    </div>
  );
}
