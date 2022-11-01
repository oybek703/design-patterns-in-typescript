interface IInsurance {
    id: number
    status: string

    setVehicle(vehicle: any): void
}

class TFInsurance implements IInsurance {
    id: number
    status: string
    vehicle: any

    setVehicle(vehicle: any) {
        this.vehicle = vehicle
    }
}

class ABInsurance implements IInsurance {
    id: number
    status: string
    vehicle: any

    setVehicle(vehicle: any) {
        this.vehicle = vehicle
    }
}

abstract class InsuranceFactory {
    db: any

    createInsurance() {
    }

    saveHistory(ins: IInsurance) {
        this.db.saveToDB(ins)
    }
}

class TFInsuranceFactory extends InsuranceFactory {
    createInsurance(): IInsurance {
        return new TFInsurance()
    }
}

class ABInsuranceFactory extends InsuranceFactory {
    createInsurance(): IInsurance {
        return new ABInsurance()
    }
}

const tfInsuranceFactory = new TFInsuranceFactory()
const TFIns = tfInsuranceFactory.createInsurance()
tfInsuranceFactory.saveHistory(TFIns)


const INSURANCE_TYPE = {
    ab: ABInsurance,
    tf: TFInsurance
}

type IT = typeof INSURANCE_TYPE

class InsuranceFactoryAlt {
    db: any

    createInsurance<T extends keyof IT>(type: T): IT[T]  {
        return INSURANCE_TYPE[type]
    }

    saveHistory(ins: IInsurance) {
        this.db.saveToDB(ins)
    }

}

const insFactoryAlt = new InsuranceFactoryAlt()
const ABIns = new (insFactoryAlt.createInsurance('ab'))
insFactoryAlt.saveHistory(ABIns)
