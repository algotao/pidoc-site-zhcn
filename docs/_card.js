
export const Card = ({ url, cardimage, texthead, textinfo }) => {
  return (
    <div align="center">
      <a href={url}>
        <div class="card">
          <div class="card__image">
            <img width="121px"
              src={cardimage}
              alt={texthead}
              title={texthead} />
          </div>
          <div class="card__body">
            <h3>{texthead}</h3>
            <normal>
              {textinfo}
            </normal>
          </div>
        </div>
      </a>
    </div>
  );
}

/*

    <div className={colwidth + " col input-group"}>
      <div className="input-group-prepend input-group-prepend-p">
        <span className="input-group-text">{prepend}</span>
      </div>
      <input type="text" className="form-control" placeholder={placeholder} name={name} defaultValue={defaultvalue} disabled={disabled} onChange={onchange} />
    </div>
*/