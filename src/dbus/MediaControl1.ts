import * as DBus from "dbus-next";
import {
    LooselyTypedEmitter,
    EventListenerSignature,
    wrapDbusVariant,
    unwrapDbusVariantObject,
    unwrapDbusVariant,
} from "../utilts";

/*
 * Generated by dbus-next interface generator
 * Template: typescript-class-auto.ts.hbs
 */

// Introspection XML of org.bluez at /org/bluez/hci0/dev_E8_D0_3C_47_B7_00
const XMLObjectData = `<!DOCTYPE node PUBLIC "-//freedesktop//DTD D-BUS Object Introspection 1.0//EN" "http://www.freedesktop.org/standards/dbus/1.0/introspect.dtd">
<node><interface name="org.freedesktop.DBus.Introspectable"><method name="Introspect"><arg name="xml" type="s" direction="out"/></method></interface><interface name="org.bluez.Device1"><method name="Disconnect"/><method name="Connect"/><method name="ConnectProfile"><arg name="UUID" type="s" direction="in"/></method><method name="DisconnectProfile"><arg name="UUID" type="s" direction="in"/></method><method name="Pair"/><method name="CancelPairing"/><property name="Address" type="s" access="read"/><property name="AddressType" type="s" access="read"/><property name="Name" type="s" access="read"/><property name="Alias" type="s" access="readwrite"/><property name="Class" type="u" access="read"/><property name="Appearance" type="q" access="read"/><property name="Icon" type="s" access="read"/><property name="Paired" type="b" access="read"/><property name="Trusted" type="b" access="readwrite"/><property name="Blocked" type="b" access="readwrite"/><property name="LegacyPairing" type="b" access="read"/><property name="RSSI" type="n" access="read"/><property name="Connected" type="b" access="read"/><property name="UUIDs" type="as" access="read"/><property name="Modalias" type="s" access="read"/><property name="Adapter" type="o" access="read"/><property name="ManufacturerData" type="a{qv}" access="read"/><property name="ServiceData" type="a{sv}" access="read"/><property name="TxPower" type="n" access="read"/><property name="ServicesResolved" type="b" access="read"/></interface><interface name="org.freedesktop.DBus.Properties"><method name="Get"><arg name="interface" type="s" direction="in"/><arg name="name" type="s" direction="in"/><arg name="value" type="v" direction="out"/></method><method name="Set"><arg name="interface" type="s" direction="in"/><arg name="name" type="s" direction="in"/><arg name="value" type="v" direction="in"/></method><method name="GetAll"><arg name="interface" type="s" direction="in"/><arg name="properties" type="a{sv}" direction="out"/></method><signal name="PropertiesChanged"><arg name="interface" type="s"/><arg name="changed_properties" type="a{sv}"/><arg name="invalidated_properties" type="as"/></signal></interface><interface name="org.bluez.MediaControl1"><method name="Play"><annotation name="org.freedesktop.DBus.Deprecated" value="true"/></method><method name="Pause"><annotation name="org.freedesktop.DBus.Deprecated" value="true"/></method><method name="Stop"><annotation name="org.freedesktop.DBus.Deprecated" value="true"/></method><method name="Next"><annotation name="org.freedesktop.DBus.Deprecated" value="true"/></method><method name="Previous"><annotation name="org.freedesktop.DBus.Deprecated" value="true"/></method><method name="VolumeUp"><annotation name="org.freedesktop.DBus.Deprecated" value="true"/></method><method name="VolumeDown"><annotation name="org.freedesktop.DBus.Deprecated" value="true"/></method><method name="FastForward"><annotation name="org.freedesktop.DBus.Deprecated" value="true"/></method><method name="Rewind"><annotation name="org.freedesktop.DBus.Deprecated" value="true"/></method><property name="Connected" type="b" access="read"/><property name="Player" type="o" access="read"/></interface></node>`;

/***** Signals for org.bluez.MediaControl1 *****/
interface OrgBluezMediaControl1Events {
    PropertiesChanged: (
        iface: string,
        changedProperties: { [key: string]: any },
        invalidatedProperties: string[],
    ) => void;
}
/***** Properties of org.bluez.MediaControl1 *****/
export interface OrgBluezMediaControl1Props {
    Connected: boolean;
    Player: DBus.ObjectPath;
}
/**
 * Service: org.bluez
 * ObjectPath: /org/bluez/hci0/dev_E8_D0_3C_47_B7_00
 * Interface: org.bluez.MediaControl1
 */
export class OrgBluezMediaControl1<
    L extends EventListenerSignature<L> = Record<string, never>,
> extends LooselyTypedEmitter<OrgBluezMediaControl1Events & L> {
    public static readonly DbusInterfaceName = "org.bluez.MediaControl1";

    public dbusObject: DBus.ProxyObject;
    public propertiesDBusInterface: DBus.ClientInterface;
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(
        bus: DBus.MessageBus,
        objectPath: string = "/org/bluez/hci0/dev_E8_D0_3C_47_B7_00",
        xml: string = XMLObjectData,
    ): Promise<OrgBluezMediaControl1> {
        return bus.getProxyObject("org.bluez", objectPath, xml).then((obj) => new OrgBluezMediaControl1(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        super();
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface("org.bluez.MediaControl1");
        this.propertiesDBusInterface = this.dbusObject.getInterface("org.freedesktop.DBus.Properties");

        // forward property change events
        const forwardPropertyChange = (iface: string, changed: any, invalidated: any) => {
            if (iface === OrgBluezMediaControl1.DbusInterfaceName) {
                this.emit("PropertiesChanged", iface, unwrapDbusVariantObject(changed), invalidated);
            }
        };

        // forward all signals
        this.on("newListener", (event: string, listener: (...args: any[]) => void) => {
            if (event === "PropertiesChanged" && this.listenerCount("PropertiesChanged") === 0) {
                this.propertiesDBusInterface.addListener("PropertiesChanged", forwardPropertyChange);
            } else {
                this.thisDBusInterface.addListener(event, listener);
            }
        });
        this.on("removeListener", (event: string, listener: (...args: any[]) => void) => {
            if (event === "PropertiesChanged" && this.listenerCount("PropertiesChanged") === 0) {
                this.propertiesDBusInterface.removeListener("PropertiesChanged", forwardPropertyChange);
            } else {
                this.thisDBusInterface.removeListener(event, listener);
            }
        });
    }
    /***** Properties *****/

    public getProperties(): Promise<Partial<OrgBluezMediaControl1Props>> {
        return this.propertiesDBusInterface
            .GetAll(OrgBluezMediaControl1.DbusInterfaceName)
            .then(unwrapDbusVariantObject);
    }

    public getProperty<T extends keyof OrgBluezMediaControl1Props>(name: T): Promise<OrgBluezMediaControl1Props[T]> {
        return this.propertiesDBusInterface.Get(OrgBluezMediaControl1.DbusInterfaceName, name).then(unwrapDbusVariant);
    }

    public setProperty<T extends keyof OrgBluezMediaControl1Props>(
        name: T,
        value: OrgBluezMediaControl1Props[T],
    ): Promise<void> {
        return this.propertiesDBusInterface.Set(OrgBluezMediaControl1.DbusInterfaceName, name, wrapDbusVariant(value));
    }

    //@property({ name: 'Connected', signature: 'b', access: ACCESS_READ })
    public Connected(): Promise<boolean> {
        return this.propertiesDBusInterface
            .Get(OrgBluezMediaControl1.DbusInterfaceName, "Connected")
            .then(unwrapDbusVariant);
    }

    //@property({ name: 'Player', signature: 'o', access: ACCESS_READ })
    public Player(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface
            .Get(OrgBluezMediaControl1.DbusInterfaceName, "Player")
            .then(unwrapDbusVariant);
    }

    /***** Methods *****/

    //@method({ name: 'Play', inSignature: '', outSignature: '' })
    public Play(): Promise<void> {
        return this.thisDBusInterface.Play();
    }

    //@method({ name: 'Pause', inSignature: '', outSignature: '' })
    public Pause(): Promise<void> {
        return this.thisDBusInterface.Pause();
    }

    //@method({ name: 'Stop', inSignature: '', outSignature: '' })
    public Stop(): Promise<void> {
        return this.thisDBusInterface.Stop();
    }

    //@method({ name: 'Next', inSignature: '', outSignature: '' })
    public Next(): Promise<void> {
        return this.thisDBusInterface.Next();
    }

    //@method({ name: 'Previous', inSignature: '', outSignature: '' })
    public Previous(): Promise<void> {
        return this.thisDBusInterface.Previous();
    }

    //@method({ name: 'VolumeUp', inSignature: '', outSignature: '' })
    public VolumeUp(): Promise<void> {
        return this.thisDBusInterface.VolumeUp();
    }

    //@method({ name: 'VolumeDown', inSignature: '', outSignature: '' })
    public VolumeDown(): Promise<void> {
        return this.thisDBusInterface.VolumeDown();
    }

    //@method({ name: 'FastForward', inSignature: '', outSignature: '' })
    public FastForward(): Promise<void> {
        return this.thisDBusInterface.FastForward();
    }

    //@method({ name: 'Rewind', inSignature: '', outSignature: '' })
    public Rewind(): Promise<void> {
        return this.thisDBusInterface.Rewind();
    }
}
