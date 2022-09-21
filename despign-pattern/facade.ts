// When you have a complex system, you can use a facade class,
// that allows the user to make some operations in an easy way, hiding the low level details

class PlumbingSystem {
    setPressure(pressure: number) { }
    turnOn() { }
    turnOff() { }
}

class ElectricalSystem {
    setVoltage(w: number) { }
    turnOn() { }
    turnOff() { }
}
// This is the facade with the simplified interface and with no low level functions inside,
//  only the ones needed to the user
class House {
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    public turnOnSystems() {
        this.plumbing.setPressure(120)
        this.plumbing.turnOn();

        this.electrical.setVoltage(232)
        this.plumbing.turnOn();
    }
}

const house = new House();
house.turnOnSystems();

