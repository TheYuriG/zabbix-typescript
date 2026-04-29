import { HostInterface } from "./HostInterface.ts";

export interface Host {
    hostid: string;
    proxyid?: string;
    host?: string;
    status?: string;
    ipmi_authtype?: string;
    ipmi_privilege?: string;
    ipmi_username?: string;
    ipmi_password?: string;
    maintenanceid?: string;
    maintenance_status?: string;
    maintenance_type?: string;
    maintenance_from?: string;
    name?: string;
    flags?: string;
    templateid?: string;
    description?: string;
    tls_connect?: string;
    tls_accept?: string;
    tls_issuer?: string;
    tls_subject?: string;
    custom_interfaces?: string;
    uuid?: string;
    vendor_name?: string;
    vendor_version?: string;
    proxy_groupid?: string;
    monitored_by?: string;
    inventory_mode?: string;
    active_available?: string;
    assigned_proxyid?: string;
    interfaces?: HostInterface[];
}