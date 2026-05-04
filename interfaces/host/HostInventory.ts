export interface HostInventory {
  /**
   * Alias.
   * Maximum length: 128 characters.
   */
  alias?: string;
  /**
   * Asset tag.
   * Maximum length: 64 characters.
   */
  asset_tag?: string;
  /**
   * Chassis information.
   * Maximum length: 64 characters.
   */
  chassis?: string;
  /**
   * Contact person.
   * Length depends on the database used.
   */
  contact?: string;
  /**
   * Contract number.
   * Maximum length: 64 characters.
   */
  contract_number?: string;
  /**
   * Hardware decommissioning date.
   * Maximum length: 64 characters.
   */
  date_hw_decomm?: string;
  /**
   * Hardware maintenance expiry date.
   * Maximum length: 64 characters.
   */
  date_hw_expiry?: string;
  /**
   * Hardware installation date.
   * Maximum length: 64 characters.
   */
  date_hw_install?: string;
  /**
   * Hardware purchase date.
   * Maximum length: 64 characters.
   */
  date_hw_purchase?: string;
  /**
   * Deployment status.
   * Maximum length: 64 characters.
   */
  deployment_status?: string;
  /**
   * Hardware details.
   * Maximum length: 255 characters.
   */
  hardware?: string;
  /**
   * Detailed hardware information.
   * Length depends on the database used.
   */
  hardware_full?: string;
  /**
   * Host subnet mask.
   * Maximum length: 39 characters.
   */
  host_netmask?: string;
  /**
   * Host networks.
   * Length depends on the database used.
   */
  host_networks?: string;
  /**
   * Host router.
   * Maximum length: 39 characters.
   */
  host_router?: string;
  /**
   * Hardware architecture.
   * Maximum length: 32 characters.
   */
  hw_arch?: string;
  /**
   * Installer name.
   * Maximum length: 64 characters.
   */
  installer_name?: string;
  /**
   * Location description.
   * Length depends on the database used.
   */
  location?: string;
  /**
   * Location latitude.
   * Maximum length: 16 characters.
   */
  location_lat?: string;
  /**
   * Location longitude.
   * Maximum length: 16 characters.
   */
  location_lon?: string;
  /**
   * MAC address A.
   * Maximum length: 64 characters.
   */
  macaddress_a?: string;
  /**
   * MAC address B.
   * Maximum length: 64 characters.
   */
  macaddress_b?: string;
  /**
   * Model information.
   * Maximum length: 64 characters.
   */
  model?: string;
  /**
   * Name of the host.
   * Maximum length: 128 characters.
   */
  name?: string;
  /**
   * Additional notes.
   * Length depends on the database used.
   */
  notes?: string;
  /**
   * Out-of-band IP address.
   * Maximum length: 39 characters.
   */
  oob_ip?: string;
  /**
   * Out-of-band netmask.
   * Maximum length: 39 characters.
   */
  oob_netmask?: string;
  /**
   * Out-of-band router.
   * Maximum length: 39 characters.
   */
  oob_router?: string;
  /**
   * Operating system name.
   * Maximum length: 128 characters.
   */
  os?: string;
  /**
   * Detailed OS name.
   * Maximum length: 255 characters.
   */
  os_full?: string;
  /**
   * Short OS name.
   * Maximum length: 128 characters.
   */
  os_short?: string;
  /**
   * Primary POC mobile number.
   * Maximum length: 64 characters.
   */
  poc_1_cell?: string;
  /**
   * Primary email.
   * Maximum length: 128 characters.
   */
  poc_1_email?: string;
  /**
   * Primary POC name.
   * Maximum length: 128 characters.
   */
  poc_1_name?: string;
  /**
   * Primary POC notes.
   * Length depends on the database used.
   */
  poc_1_notes?: string;
  /**
   * Primary POC phone A.
   * Maximum length: 64 characters.
   */
  poc_1_phone_a?: string;
  /**
   * Primary POC phone B.
   * Maximum length: 64 characters.
   */
  poc_1_phone_b?: string;
  /**
   * Primary POC screen name.
   * Maximum length: 64 characters.
   */
  poc_1_screen?: string;
  /**
   * Secondary POC mobile number.
   * Maximum length: 64 characters.
   */
  poc_2_cell?: string;
  /**
   * Secondary email.
   * Maximum length: 128 characters.
   */
  poc_2_email?: string;
  /**
   * Secondary POC name.
   * Maximum length: 128 characters.
   */
  poc_2_name?: string;
  /**
   * Secondary POC notes.
   * Length depends on the database used.
   */
  poc_2_notes?: string;
  /**
   * Secondary POC phone A.
   * Maximum length: 64 characters.
   */
  poc_2_phone_a?: string;
  /**
   * Secondary POC phone B.
   * Maximum length: 64 characters.
   */
  poc_2_phone_b?: string;
  /**
   * Secondary POC screen name.
   * Maximum length: 64 characters.
   */
  poc_2_screen?: string;
  /**
   * Serial number A.
   * Maximum length: 64 characters.
   */
  serialno_a?: string;
  /**
   * Serial number B.
   * Maximum length: 64 characters.
   */
  serialno_b?: string;
  /**
   * Site address A.
   * Maximum length: 128 characters.
   */
  site_address_a?: string;
  /**
   * Site address B.
   * Maximum length: 128 characters.
   */
  site_address_b?: string;
  /**
   * Site address C.
   * Maximum length: 128 characters.
   */
  site_address_c?: string;
  /**
   * Site city.
   * Maximum length: 128 characters.
   */
  site_city?: string;
  /**
   * Site country.
   * Maximum length: 64 characters.
   */
  site_country?: string;
  /**
   * Site notes.
   * Length depends on the database used.
   */
  site_notes?: string;
  /**
   * Site rack location.
   * Maximum length: 128 characters.
   */
  site_rack?: string;
  /**
   * Site state.
   * Maximum length: 64 characters.
   */
  site_state?: string;
  /**
   * Site ZIP/postal code.
   * Maximum length: 64 characters.
   */
  site_zip?: string;
  /**
   * Software.
   * Maximum length: 255 characters.
   */
  software?: string;
  /**
   * Software application A.
   * Maximum length: 64 characters.
   */
  software_app_a?: string;
  /**
   * Software application B.
   * Maximum length: 64 characters.
   */
  software_app_b?: string;
  /**
   * Software application C.
   * Maximum length: 64 characters.
   */
  software_app_c?: string;
  /**
   * Software application D.
   * Maximum length: 64 characters.
   */
  software_app_d?: string;
  /**
   * Software application E.
   * Maximum length: 64 characters.
   */
  software_app_e?: string;
  /**
   * Software details.
   * Length depends on the database used.
   */
  software_full?: string;
  /**
   * Tag.
   * Maximum length: 64 characters.
   */
  tag?: string;
  /**
   * Type.
   * Maximum length: 64 characters.
   */
  type?: string;
  /**
   * Type details.
   * Maximum length: 64 characters.
   */
  type_full?: string;
  /**
   * URL A.
   * Maximum length: 255 characters.
   */
  url_a?: string;
  /**
   * URL B.
   * Maximum length: 255 characters.
   */
  url_b?: string;
  /**
   * URL C.
   * Maximum length: 255 characters.
   */
  url_c?: string;
  /**
   * Vendor.
   * Maximum length: 64 characters.
   */
  vendor?: string;
}
