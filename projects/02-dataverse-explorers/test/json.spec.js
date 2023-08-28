import jsonData from '../src/data/data.json'

describe('JSON', ()=>{
  it('El archivo JSON debe ser un arreglo', ()=>{
    expect(Array.isArray(jsonData)).toBe(true)
  })

  it('El archivo JSON debe tener una longitud de 24 objetos', ()=>{
    expect(jsonData.length).toBe(24)
  })

  it('cada objeto debe tener las propiedades "name", "img", "statistics", y "description"', () => {

    jsonData.forEach(item => {
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('img');
      expect(item).toHaveProperty('statistics');
      expect(item).toHaveProperty('description');
    })

  });

  it('la propiedad "statistics" debe tener como valor un objeto con las propiedades "value" y "label"', () => {

    jsonData.forEach(item => {
      expect(item['statistics']).toHaveProperty('value');
      expect(item['statistics']).toHaveProperty('label');
    })

  });
})