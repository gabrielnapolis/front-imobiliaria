import NumberNiceSelect from "@/ui/NumberNiceSelect";

const ListingDetails = () => {
  const selectHandler = (e: any) => {};

  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three">Detalhes</h4>
      <div className="row align-items-end">
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Tamanho em metros*</label>
            <input type="text" placeholder="Ex: 3.210 m2" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Quartos*</label>
            <NumberNiceSelect
              className="nice-select"
              options={[
                { value: 1, text: 0 },
                { value: 2, text: 1 },
                { value: 3, text: 2 },
                { value: 4, text: 3 },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Banheiros*</label>
            <NumberNiceSelect
              className="nice-select"
              options={[
                { value: 1, text: 0 },
                { value: 2, text: 1 },
                { value: 3, text: 2 },
                { value: 4, text: 3 },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Cozinhas*</label>
            <NumberNiceSelect
              className="nice-select"
              options={[
                { value: 1, text: 0 },
                { value: 2, text: 1 },
                { value: 3, text: 2 },
                { value: 4, text: 3 },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Garagem</label>
            <NumberNiceSelect
              className="nice-select"
              options={[
                { value: 1, text: 1 },
                { value: 2, text: 2 },
                { value: 3, text: 3 },
                { value: 4, text: 4 },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Ano de Construção*</label>
            <input type="text" placeholder="Ano de Construção" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Andar*</label>
            <NumberNiceSelect
              className="nice-select"
              options={[
                { value: 1, text: 1 },
                { value: 2, text: 2 },
                { value: 3, text: 3 },
                { value: 4, text: 4 },
                { value: 5, text: 5 },
                { value: 6, text: 6 },
                { value: 7, text: 7 },
                { value: 8, text: 8 },
                { value: 9, text: 9 },
                { value: 10, text: 10 },
                { value: 11, text: 11 },
                { value: 12, text: 12 },
                { value: 13, text: 13 },
                { value: 14, text: 14 },
                { value: 15, text: 15 },
                { value: 16, text: 16 },
                { value: 17, text: 17 },
                { value: 18, text: 18 },
                { value: 19, text: 19 },
                { value: 20, text: 20 },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
