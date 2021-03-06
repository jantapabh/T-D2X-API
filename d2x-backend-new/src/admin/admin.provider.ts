import { ChartGeneral, ChartSymptom, ChartProduct, ChartMonth, ChartYear, ChartOrder, ChartUser } from '../chart/model/chart.model';
import { Product } from '../product/model/product.model';
import { SymptomTest } from '../symptom/model/symptom.model';
import { MapProduct } from '../symptom/model/map.product.model';
export const AdminProviders = [
  
  {
    provide: 'mapRepo', 
    useValue: Map,
  },
  {
    provide: 'ChartGeneralRepo', 
    useValue: ChartGeneral,
  },

  {
    provide: 'ChartSymptomRepo', 
    useValue: ChartSymptom,
  },

  {
    provide: 'ChartProductRepo', 
    useValue: ChartProduct,
  },
  {
    provide: 'ChartMonthRepo', 
    useValue: ChartMonth,
  },

  {
    provide: 'ChartYearRepo', 
    useValue: ChartYear,
  },
  {
    provide: 'ProductRepo', 
    useValue: Product,
  },
  {
    provide: 'ChartOrderRepo', 
    useValue: ChartOrder,
  },
  {
    provide: 'ChartUserRepo', 
    useValue: ChartUser,
  },
  {
    provide: 'SymptomTestRepo',
    useValue: SymptomTest,
  },
  {
    provide : 'mapProductRepo',
    useValue : MapProduct
 
  }
];