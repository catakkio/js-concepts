
// Imagine of buildin a cross platform app and you want to show a button.
class IOSButton { }
class AndroidButton { }

// Bad practice
let os;
const _btn1 = os === 'ios' ? new IOSButton() : new AndroidButton()


// Use a factory object instead
class ButtonFactory {
    createButton(os: string): IOSButton | AndroidButton {
        return os === 'ios' ? new IOSButton() : new AndroidButton()
    }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton('ios');