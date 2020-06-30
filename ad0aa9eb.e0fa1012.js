(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(1),s=t(6),r=(t(0),t(123)),i={id:"liveupdates",title:"AMQ Live updates"},o={id:"liveupdates",title:"AMQ Live updates",description:"# Configuring AMQ Online for MQTT Messaging",source:"@site/../docs/deployments_subscriptions_amq.md",permalink:"/docs/liveupdates",editUrl:"https://github.com/aerogear/OpenVolunteerPlatform/edit/master/website/../docs/deployments_subscriptions_amq.md",sidebar:"docs",previous:{title:"Out of the box Keycloak based authentication",permalink:"/docs/keycloak-authz"},next:{title:"CLI commands",permalink:"/docs/client"}},c=[{value:"Terminology",id:"terminology",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create an AddressSpace",id:"create-an-addressspace",children:[]},{value:"Create an Address",id:"create-an-address",children:[]},{value:"Create a MessagingUser",id:"create-a-messaginguser",children:[]},{value:"Prerequisites",id:"prerequisites-1",children:[]},{value:"Connecting to an AMQ Online Address Using the Service Hostname",id:"connecting-to-an-amq-online-address-using-the-service-hostname",children:[]},{value:"Troubleshooting MQTT Connection Issues",id:"troubleshooting-mqtt-connection-issues",children:[{value:"Events",id:"events",children:[]},{value:"Configuration Issues",id:"configuration-issues",children:[]}]}],l={rightToc:c};function d(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"configuring-amq-online-for-mqtt-messaging"},"Configuring AMQ Online for MQTT Messaging"),Object(r.b)("p",null,"Red Hat AMQ supports the MQTT protocol which makes it a suitable Pubsub technology for powering GraphQL subscriptions at scale. This document provides recommendations for "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Configuring AMQ Online for MQTT messaging."),Object(r.b)("li",{parentName:"ul"},"Connecting to AMQ Online and using it as a pubsub within server applications.")),Object(r.b)("h2",{id:"terminology"},"Terminology"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html-single/using_amq_online_on_openshift_container_platform/index#assembly-intro-using-messaging"}),"AMQ Online")," is a mechanism that allows developers to consume the features of Red Hat AMQ within OpenShift."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_amq/7.3/html/introducing_red_hat_amq_7/about"}),"Red Hat AMQ")," provides fast, lightweight, and secure messaging for Internet-scale applications. AMQ Broker supports multiple protocols and fast message persistence."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://mqtt.org/"}),"MQTT")," stands for MQ Telemetry Transport. It is a publish/subscribe, extremely simple and lightweight messaging protocol."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"OpenShift Cluster"),Object(r.b)("li",{parentName:"ul"},"AMQ Online is installed in the OpenShift cluster")),Object(r.b)("p",null,"AMQ Online has a vast number of configuration options which should be considered to suit the specific needs of your application. This section establishes some base guidelines for configuring AMQ Online for MQTT messaging, enabling GraphQL subscriptions."),Object(r.b)("p",null,"At a minimum, the following steps must be done to enable MQTT messaging."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create an AddressSpace"),Object(r.b)("li",{parentName:"ul"},"Create an Address"),Object(r.b)("li",{parentName:"ul"},"Create a MessagingUser")),Object(r.b)("h2",{id:"create-an-addressspace"},"Create an AddressSpace"),Object(r.b)("p",null,"A user can request messaging resources by creating an address space. An address space is the first resource you must create. There are two types of address spaces ",Object(r.b)("inlineCode",{parentName:"p"},"standard")," and ",Object(r.b)("inlineCode",{parentName:"p"},"brokered"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"brokered")," address space must be used for MQTT based applications. The following definition can be used to create a brokered address space."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"apiVersion: enmasse.io/v1beta1\nkind: AddressSpace\nmetadata:\n  name: myaddressspace\nspec:\n  type: brokered\n  plan: brokered-single-broker\n")),Object(r.b)("p",null,"Create the address space."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc create -f brokered-address-space.yaml\n")),Object(r.b)("p",null,"Get the details of the address space."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get <address space name> -o yaml\n")),Object(r.b)("p",null,"The output will display information including various connection details for connecting applications."),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html-single/using_amq_online_on_openshift_container_platform/index#create-address-space-cli-messaging"}),"Creating address spaces using the command line")," for more information."),Object(r.b)("h2",{id:"create-an-address"},"Create an Address"),Object(r.b)("p",null,"An address is part of an address space and represents a destination for sending and receiving messages. An address is created and used to represent a topic in MQTT terms. For MQTT, a ",Object(r.b)("inlineCode",{parentName:"p"},"topic")," address type must be used."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"apiVersion: enmasse.io/v1beta1\nkind: Address\nmetadata:\n    name: myaddressspace.myaddress # must have the format <address space name>.<address name>\nspec:\n    address: myaddress\n    type: topic\n    plan: brokered-topic\n")),Object(r.b)("p",null,"Create the address using the command line."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc create -f topic-address.yaml\n")),Object(r.b)("p",null,"In the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#define-subscriptions-in-the-schema-and-implement-subscription-resolvers"}),"implementing subscription resolvers")," guide, the usage of ",Object(r.b)("inlineCode",{parentName:"p"},"pubsub.asyncIterator()")," is described. An address must be created for each topic name passed into ",Object(r.b)("inlineCode",{parentName:"p"},"pubsub.asyncIterator()"),"."),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html-single/using_amq_online_on_openshift_container_platform/index#create-address-cli-messaging"}),"Creating addresses using the command line")," for more information."),Object(r.b)("h2",{id:"create-a-messaginguser"},"Create a MessagingUser"),Object(r.b)("p",null,"A messaging client connects using a MessagingUser. A MessagingUser specifies an authorization policy that controls which addresses may be used and the operations that may be performed on those addresses."),Object(r.b)("p",null,"Users are configured as MessagingUser resources. Users can be created, deleted, read, updated, and listed."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'apiVersion: user.enmasse.io/v1beta1\nkind: MessagingUser\nmetadata:\n  name: myaddressspace.mymessaginguser # must be in the format <address space name>.<username>\nspec:\n  username: mymessaginguser\n  authentication:\n    type: password\n    password: cGFzc3dvcmQ= # must be Base64 encoded. Password is \'password\'\n  authorization:\n    - addresses: ["*"]\n      operations: ["send", "recv"]\n')),Object(r.b)("p",null,"Create the messaging user."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc create -f my-messaging-user.yaml\n")),Object(r.b)("p",null,"An application can now connect to an AMQ Online address using this ",Object(r.b)("inlineCode",{parentName:"p"},"MessagingUser"),"'s credentials. For more information see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html-single/using_amq_online_on_openshift_container_platform/index#con-user-model-messaging"}),"AMQ Online User Model"),"."),Object(r.b)("h1",{id:"using-graphql-mqtt-pubsub-with-amq-online"},"Using GraphQL MQTT PubSub with AMQ Online"),Object(r.b)("h2",{id:"prerequisites-1"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"OpenShift cluster"),Object(r.b)("li",{parentName:"ul"},"AMQ Online is installed in the OpenShift cluster"),Object(r.b)("li",{parentName:"ul"},"The appropriate AMQ Online resources are available for MQTT Applications (AddressSpace, Address, MessagingUser)")),Object(r.b)("p",null,"This guide describes how to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://npm.im/@aerogear/graphql-mqtt-subscriptions"}),Object(r.b)("inlineCode",{parentName:"a"},"@aerogear/graphql-mqtt-subscriptions"))," to connect to an AMQ Online address."),Object(r.b)("p",null,"The connection details for an Address Space can be retrieved from the terminal."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get addressspace <addressspace> -o yaml\n")),Object(r.b)("p",null,"In most cases, there are two options for connecting to an AMQ Online address."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Using the service hostname - Allows clients to connect from within the OpenShift cluster."),Object(r.b)("li",{parentName:"ul"},"Using the external hostname - Allows clients to connect from outside the OpenShift cluster.")),Object(r.b)("h2",{id:"connecting-to-an-amq-online-address-using-the-service-hostname"},"Connecting to an AMQ Online Address Using the Service Hostname"),Object(r.b)("p",null,"It is recommended that applications running inside OpenShift connect using the service hostname. The service hostname is only accessible within the OpenShift cluster. This ensures messages routed between your application and AMQ Online stay within the OpenShift cluster and never go onto the public internet."),Object(r.b)("p",null,"The service hostname can be retrieved using the terminal."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'oc get addressspace <addressspace name> -o jsonpath=\'{.status.endpointStatuses[?(@.name=="messaging")].serviceHost\n')),Object(r.b)("p",null,"Once you have the AMQ address and credentials, open the ",Object(r.b)("inlineCode",{parentName:"p"},"server/.env")," file and update the MQTT section accordingly."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"## MQTT\nMQTT_HOST=\nMQTT_PORT=\nMQTT_PASSWORD=\nMQTT_USERNAME=\nMQTT_PROTOCOL= \n")),Object(r.b)("h2",{id:"troubleshooting-mqtt-connection-issues"},"Troubleshooting MQTT Connection Issues"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"server/src/pubsub.ts")," contains code that creates connection to MQTT or an in memory pub sub topic."),Object(r.b)("p",null,"In this section we are going to see how to log events and fixing configuration issues by modifying the source code in the mentioned file. "),Object(r.b)("h3",{id:"events"},"Events"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"mqtt")," module emits various events during runtime.\nIt recommended to add listeners for these events for regular operation and for troubleshooting."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"client.on('connect', () => {\n  console.log('client has connected')\n})\n\nclient.on('reconnect', () => {\n  console.log('client has reconnected')\n})\n\nclient.on('offline', () => {\n  console.log('Client has gone offline')\n})\n\nclient.on('error', (error) => {\n  console.log(`an error has occurred ${error}`)\n})\n")),Object(r.b)("p",null,"Read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/mqtt"}),Object(r.b)("inlineCode",{parentName:"a"},"mqtt documentation"))," to learn about all of the events and what causes them."),Object(r.b)("h3",{id:"configuration-issues"},"Configuration Issues"),Object(r.b)("p",null,"If your application is experiencing connection errors, the most important thing to check is the configuration being passed into ",Object(r.b)("inlineCode",{parentName:"p"},"mqtt.connect"),". Because your application may run locally or in OpenShift, it may connect using internal or external hostnames, and it may or may not use TLS, it's very easy to accidentally provide the wrong configuration."),Object(r.b)("p",null,"The Node.js ",Object(r.b)("inlineCode",{parentName:"p"},"mqtt")," module does not report any errors if parameters such as ",Object(r.b)("inlineCode",{parentName:"p"},"hostname")," or ",Object(r.b)("inlineCode",{parentName:"p"},"port")," are incorrect. Instead, it will silently fail and allow your application to start without messaging capabilities."),Object(r.b)("p",null,"It may be necessary to handle this scenario in your application. The following workaround can be used."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const TIMEOUT = 10 // number of seconds to wait before checking if the client is connected\n\nsetTimeout(() => {\n  if (!client.connected) {\n    console.log(`client not connected after ${TIMEOUT} seconds`)\n    // process.exit(1) if you wish\n  }\n}, TIMEOUT * 1000)\n")),Object(r.b)("p",null,"This code can be used to detect if the MQTT client hasn't connected. This can be helpful for detecting potential configuration issues and allows your application to respond to that scenario."))}d.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),s=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),d=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},p=function(e){var n=d(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return t?s.a.createElement(m,o({ref:n},l,{components:t})):s.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);