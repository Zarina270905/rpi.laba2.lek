import { partners } from "../data/partners";
import PartnerCard from "../components/PartnerCard";

export default function PartnersPage() {
  return (
    <div>
      <h1 className="page-title">Партнёры</h1>
      <p className="page-subtitle">
        Компании, образовательные учреждения и НКО, с которыми мы сотрудничаем.
      </p>

      <div className="partners-grid partners-grid--full">
        {partners.map((p) => (
          <PartnerCard key={p.id} partner={p} />
        ))}
      </div>
    </div>
  );
}