import * as DBus from 'dbus-next';
import { 
    LooselyTypedEmitter, EventListenerSignature,
    wrapDbusVariant, wrapDbusVariantObject, wrapDbusVariantArray, wrapDbusSignature,
    unwrapDbusVariantObject, unwrapDbusVariantArray, unwrapDbusVariant, unwrapDbusVariantAll, unwrapDbusSignature
} from '../utilts';

/*
 * Generated by dbus-next interface generator
 * Template: typescript-class-auto.ts.hbs
 */


/***** Signals for org.bluez.GattService1 *****/
interface OrgBluezGattService1Events {

    "PropertiesChanged": (iface: string, changedProperties: {[key:string]: any}, invalidatedProperties: string[]) => void;
}
/***** Properties of org.bluez.GattService1 *****/
export interface OrgBluezGattService1Props {
    UUID: string;
    Device: DBus.ObjectPath;
    Primary: boolean;
    Includes: Array<DBus.ObjectPath>;
}
/**
 * Service: org.bluez
 * ObjectPath: /org/bluez/hci0/dev_80_E1_26_08_94_85/-
 * Interface: org.bluez.GattService1
 */
export class OrgBluezGattService1<L extends EventListenerSignature<L> = {}> extends LooselyTypedEmitter<OrgBluezGattService1Events & L> {
    public static readonly DbusInterfaceName = 'org.bluez.GattService1';

    public dbusObject: DBus.ProxyObject;
    public propertiesDBusInterface: DBus.ClientInterface;
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(bus: DBus.MessageBus, objectPath: string, xml?: string): Promise<OrgBluezGattService1> {
        return bus.getProxyObject('org.bluez', objectPath, xml).then((obj) => new OrgBluezGattService1(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        super();
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface('org.bluez.GattService1');
        this.propertiesDBusInterface = this.dbusObject.getInterface('org.freedesktop.DBus.Properties');

        // forward property change events
        const forwardPropertyChange = (iface: string, changed: any, invalidated: any) => {
            if(iface === OrgBluezGattService1.DbusInterfaceName) {
                this.emit('PropertiesChanged', iface, unwrapDbusVariantObject(changed), invalidated);
            }
        }

        // forward all signals
        this.on("newListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.addListener('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.addListener(event, listener);
            }
        });
        this.on("removeListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.removeListener('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.removeListener(event, listener);
            }
        });
    }
    /***** Properties *****/

    public getProperties(): Promise<Partial<OrgBluezGattService1Props>> {
        return this.propertiesDBusInterface.GetAll(OrgBluezGattService1.DbusInterfaceName).then(unwrapDbusVariantObject);
    }

    public getProperty<T extends keyof OrgBluezGattService1Props>(name: T): Promise<OrgBluezGattService1Props[T]> {
        return this.propertiesDBusInterface.Get(OrgBluezGattService1.DbusInterfaceName, name).then(unwrapDbusVariant);
    }

    public setProperty<T extends keyof OrgBluezGattService1Props>(name: T, value: OrgBluezGattService1Props[T]): Promise<void> {
        return this.propertiesDBusInterface.Set(OrgBluezGattService1.DbusInterfaceName, name, wrapDbusVariant(value));
    }

    //@property({ name: 'UUID', signature: 's', access: ACCESS_READ })
    public UUID(): Promise<string> {
        return this.propertiesDBusInterface.Get(OrgBluezGattService1.DbusInterfaceName, 'UUID').then(unwrapDbusVariant);
    }

    //@property({ name: 'Device', signature: 'o', access: ACCESS_READ })
    public Device(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(OrgBluezGattService1.DbusInterfaceName, 'Device').then(unwrapDbusVariant);
    }

    //@property({ name: 'Primary', signature: 'b', access: ACCESS_READ })
    public Primary(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(OrgBluezGattService1.DbusInterfaceName, 'Primary').then(unwrapDbusVariant);
    }

    //@property({ name: 'Includes', signature: 'ao', access: ACCESS_READ })
    public Includes(): Promise<Array<DBus.ObjectPath>> {
        return this.propertiesDBusInterface.Get(OrgBluezGattService1.DbusInterfaceName, 'Includes').then(unwrapDbusVariant);
    }

    /***** Methods *****/

}