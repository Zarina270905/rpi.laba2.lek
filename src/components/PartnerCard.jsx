export default function PartnerCard({ partner }) {
  return (
    <div className="partner-card">
      <div className="partner-header">
        <img
          src={partner.logo}
          alt={partner.name}
          className="partner-logo"
          onError={(e) => {
            
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
          }}
        />
        <span className="partner-logo-fallback">{partner.name}</span>

        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="partner-arrow"
          title={`Перейти на сайт ${partner.name}`}
          aria-label={`Перейти на сайт ${partner.name}`}
        >
          ↗
        </a>
      </div>

      <p className="partner-description">{partner.description}</p>
    </div>
  );
}