import { XMLParser } from "fast-xml-parser";

const parseNmapResult = (xmlOutput) => {
  const parser = new XMLParser({ ignoreAttributes: false });

  const data = parser.parse(xmlOutput);
  let hosts = data.nmaprun.host || []; //if exists use it, otherwise use []

  if (!Array.isArray(hosts)) {
    hosts = [hosts];
  }

  return hosts.map((host) => {
    let addresses = host.address || [];

    if (!Array.isArray(addresses)) {
      addresses = [addresses]; //if there is one address it will make one element array
    }

    const ipAddress = addresses.find(
      (address) => address["@_addrtype"] === "ipv4",
    ); // @_addrtype is xml value for address type

    const macAddress = addresses.find(
      (address) => address["@_addrtype"] === "mac",
    );

    return {
      ip: ipAddress ? ipAddress["@_addr"] : null, //@_addr value of adress
      mac: macAddress ? macAddress["@_addr"] : null,
    };
  }); // return end
};

export default parseNmapResult;
