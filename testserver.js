var utf8 = require('utf8');
var http = require("http");
/*var soap = " <soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\
   <soapenv:Body>\
      <ns1:getMetricDataResponse soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xmlns:ns1=\"http://metricsdata.webservicesimpl.server.introscope.wily.com\">\
         <getMetricDataReturn soapenc:arrayType=\"ns2:TimesliceGroupedMetricData[10]\" xsi:type=\"soapenc:Array\" xmlns:ns2=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
            <getMetricDataReturn href=\"#id0\"/>\
            <getMetricDataReturn href=\"#id1\"/>\
            <getMetricDataReturn href=\"#id2\"/>\
            <getMetricDataReturn href=\"#id3\"/>\
            <getMetricDataReturn href=\"#id4\"/>\
            <getMetricDataReturn href=\"#id5\"/>\
            <getMetricDataReturn href=\"#id6\"/>\
            <getMetricDataReturn href=\"#id7\"/>\
            <getMetricDataReturn href=\"#id8\"/>\
            <getMetricDataReturn href=\"#id9\"/>\
         </getMetricDataReturn>\
      </ns1:getMetricDataResponse>\
      <multiRef id=\"id3\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns3:TimesliceGroupedMetricData\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\" xmlns:ns3=\"urn:ca.wily.introscope.webservices\">\
         <metricData soapenc:arrayType=\"ns3:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id10\"/>\
            <metricData href=\"#id11\"/>\
            <metricData href=\"#id12\"/>\
            <metricData href=\"#id13\"/>\
            <metricData href=\"#id14\"/>\
            <metricData href=\"#id15\"/>\
            <metricData href=\"#id16\"/>\
            <metricData href=\"#id17\"/>\
            <metricData href=\"#id18\"/>\
            <metricData href=\"#id19\"/>\
            <metricData href=\"#id20\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:02:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:01:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id5\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns4:TimesliceGroupedMetricData\" xmlns:ns4=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <metricData soapenc:arrayType=\"ns4:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id21\"/>\
            <metricData href=\"#id22\"/>\
            <metricData href=\"#id23\"/>\
            <metricData href=\"#id24\"/>\
            <metricData href=\"#id25\"/>\
            <metricData href=\"#id26\"/>\
            <metricData href=\"#id27\"/>\
            <metricData href=\"#id28\"/>\
            <metricData href=\"#id29\"/>\
            <metricData href=\"#id30\"/>\
            <metricData href=\"#id31\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:04:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:03:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id4\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns5:TimesliceGroupedMetricData\" xmlns:ns5=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <metricData soapenc:arrayType=\"ns5:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id32\"/>\
            <metricData href=\"#id33\"/>\
            <metricData href=\"#id34\"/>\
            <metricData href=\"#id35\"/>\
            <metricData href=\"#id36\"/>\
            <metricData href=\"#id37\"/>\
            <metricData href=\"#id38\"/>\
            <metricData href=\"#id39\"/>\
            <metricData href=\"#id40\"/>\
            <metricData href=\"#id41\"/>\
            <metricData href=\"#id42\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:03:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:02:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id0\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns6:TimesliceGroupedMetricData\" xmlns:ns6=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <metricData soapenc:arrayType=\"ns6:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id43\"/>\
            <metricData href=\"#id44\"/>\
            <metricData href=\"#id45\"/>\
            <metricData href=\"#id46\"/>\
            <metricData href=\"#id47\"/>\
            <metricData href=\"#id48\"/>\
            <metricData href=\"#id49\"/>\
            <metricData href=\"#id50\"/>\
            <metricData href=\"#id51\"/>\
            <metricData href=\"#id52\"/>\
            <metricData href=\"#id53\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T11:59:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T11:58:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id6\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns7:TimesliceGroupedMetricData\" xmlns:ns7=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <metricData soapenc:arrayType=\"ns7:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id54\"/>\
            <metricData href=\"#id55\"/>\
            <metricData href=\"#id56\"/>\
            <metricData href=\"#id57\"/>\
            <metricData href=\"#id58\"/>\
            <metricData href=\"#id59\"/>\
            <metricData href=\"#id60\"/>\
            <metricData href=\"#id61\"/>\
            <metricData href=\"#id62\"/>\
            <metricData href=\"#id63\"/>\
            <metricData href=\"#id64\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:05:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:04:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id1\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns8:TimesliceGroupedMetricData\" xmlns:ns8=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <metricData soapenc:arrayType=\"ns8:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id65\"/>\
            <metricData href=\"#id66\"/>\
            <metricData href=\"#id67\"/>\
            <metricData href=\"#id68\"/>\
            <metricData href=\"#id69\"/>\
            <metricData href=\"#id70\"/>\
            <metricData href=\"#id71\"/>\
            <metricData href=\"#id72\"/>\
            <metricData href=\"#id73\"/>\
            <metricData href=\"#id74\"/>\
            <metricData href=\"#id75\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:00:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T11:59:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id8\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns9:TimesliceGroupedMetricData\" xmlns:ns9=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <metricData soapenc:arrayType=\"ns9:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id76\"/>\
            <metricData href=\"#id77\"/>\
            <metricData href=\"#id78\"/>\
            <metricData href=\"#id79\"/>\
            <metricData href=\"#id80\"/>\
            <metricData href=\"#id81\"/>\
            <metricData href=\"#id82\"/>\
            <metricData href=\"#id83\"/>\
            <metricData href=\"#id84\"/>\
            <metricData href=\"#id85\"/>\
            <metricData href=\"#id86\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:07:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:06:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id7\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns10:TimesliceGroupedMetricData\" xmlns:ns10=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <metricData soapenc:arrayType=\"ns10:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id87\"/>\
            <metricData href=\"#id88\"/>\
            <metricData href=\"#id89\"/>\
            <metricData href=\"#id90\"/>\
            <metricData href=\"#id91\"/>\
            <metricData href=\"#id92\"/>\
            <metricData href=\"#id93\"/>\
            <metricData href=\"#id94\"/>\
            <metricData href=\"#id95\"/>\
            <metricData href=\"#id96\"/>\
            <metricData href=\"#id97\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:06:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:05:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id2\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns11:TimesliceGroupedMetricData\" xmlns:ns11=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <metricData soapenc:arrayType=\"ns11:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id98\"/>\
            <metricData href=\"#id99\"/>\
            <metricData href=\"#id100\"/>\
            <metricData href=\"#id101\"/>\
            <metricData href=\"#id102\"/>\
            <metricData href=\"#id103\"/>\
            <metricData href=\"#id104\"/>\
            <metricData href=\"#id105\"/>\
            <metricData href=\"#id106\"/>\
            <metricData href=\"#id107\"/>\
            <metricData href=\"#id108\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:01:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:00:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id9\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns12:TimesliceGroupedMetricData\" xmlns:ns12=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <metricData soapenc:arrayType=\"ns12:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id109\"/>\
            <metricData href=\"#id110\"/>\
            <metricData href=\"#id111\"/>\
            <metricData href=\"#id112\"/>\
            <metricData href=\"#id113\"/>\
            <metricData href=\"#id114\"/>\
            <metricData href=\"#id115\"/>\
            <metricData href=\"#id116\"/>\
            <metricData href=\"#id117\"/>\
            <metricData href=\"#id118\"/>\
            <metricData href=\"#id119\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:08:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">\2014-03-10T12:07:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id29\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns13:MetricData\" xmlns:ns13=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40359</metricValue>\
      </multiRef>\
      <multiRef id=\"id12\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns14:MetricData\" xmlns:ns14=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23285</metricValue>\
      </multiRef>\
      <multiRef id=\"id74\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns15:MetricData\" xmlns:ns15=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42239</metricValue>\
      </multiRef>\
      <multiRef id=\"id64\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns16:MetricData\" xmlns:ns16=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92983</metricValue>\
      </multiRef>\
      <multiRef id=\"id69\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns17:MetricData\" xmlns:ns17=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89336</metricValue>\
      </multiRef>\
      <multiRef id=\"id48\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns18:MetricData\" xmlns:ns18=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49442</metricValue>\
      </multiRef>\
      <multiRef id=\"id17\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns19:MetricData\" xmlns:ns19=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89406</metricValue>\
      </multiRef>\
      <multiRef id=\"id118\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns20:MetricData\" xmlns:ns20=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42300</metricValue>\
      </multiRef>\
      <multiRef id=\"id105\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns21:MetricData\" xmlns:ns21=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89405</metricValue>\
      </multiRef>\
      <multiRef id=\"id42\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns22:MetricData\" xmlns:ns22=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92982</metricValue>\
      </multiRef>\
      <multiRef id=\"id91\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns23:MetricData\" xmlns:ns23=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89341</metricValue>\
      </multiRef>\
      <multiRef id=\"id43\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns24:MetricData\" xmlns:ns24=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61519</metricValue>\
      </multiRef>\
      <multiRef id=\"id102\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns25:MetricData\" xmlns:ns25=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89338</metricValue>\
      </multiRef>\
      <multiRef id=\"id20\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns26:MetricData\" xmlns:ns26=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92982</metricValue>\
      </multiRef>\
      <multiRef id=\"id70\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns27:MetricData\" xmlns:ns27=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49449</metricValue>\
      </multiRef>\
      <multiRef id=\"id97\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns28:MetricData\" xmlns:ns28=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92984</metricValue>\
      </multiRef>\
      <multiRef id=\"id49\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns29:MetricData\" xmlns:ns29=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30836</metricValue>\
      </multiRef>\
      <multiRef id=\"id52\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns30:MetricData\" xmlns:ns30=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42232</metricValue>\
      </multiRef>\
      <multiRef id=\"id89\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns31:MetricData\" xmlns:ns31=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23299</metricValue>\
      </multiRef>\
      <multiRef id=\"id96\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns32:MetricData\" xmlns:ns32=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42284</metricValue>\
      </multiRef>\
      <multiRef id=\"id36\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns33:MetricData\" xmlns:ns33=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89339</metricValue>\
      </multiRef>\
      <multiRef id=\"id108\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns34:MetricData\" xmlns:ns34=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92981</metricValue>\
      </multiRef>\
      <multiRef id=\"id73\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns35:MetricData\" xmlns:ns35=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40324</metricValue>\
      </multiRef>\
      <multiRef id=\"id76\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns36:MetricData\" xmlns:ns36=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61525</metricValue>\
      </multiRef>\
      <multiRef id=\"id50\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns37:MetricData\" xmlns:ns37=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89402</metricValue>\
      </multiRef>\
      <multiRef id=\"id21\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns38:MetricData\" xmlns:ns38=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61524</metricValue>\
      </multiRef>\
      <multiRef id=\"id66\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns39:MetricData\" xmlns:ns39=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49125</metricValue>\
      </multiRef>\
      <multiRef id=\"id79\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns40:MetricData\" xmlns:ns40=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74465</metricValue>\
      </multiRef>\
      <multiRef id=\"id15\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns41:MetricData\" xmlns:ns41=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49470</metricValue>\
      </multiRef>\
      <multiRef id=\"id75\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns42:MetricData\" xmlns:ns42=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92979</metricValue>\
      </multiRef>\
      <multiRef id=\"id61\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns43:MetricData\" xmlns:ns43=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89407</metricValue>\
      </multiRef>\
      <multiRef id=\"id59\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns44:MetricData\" xmlns:ns44=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49495</metricValue>\
      </multiRef>\
      <multiRef id=\"id80\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns45:MetricData\" xmlns:ns45=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89341</metricValue>\
      </multiRef>\
      <multiRef id=\"id88\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns46:MetricData\" xmlns:ns46=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49130</metricValue>\
      </multiRef>\
      <multiRef id=\"id14\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns47:MetricData\" xmlns:ns47=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89339</metricValue>\
      </multiRef>\
      <multiRef id=\"id10\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns48:MetricData\" xmlns:ns48=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61523</metricValue>\
      </multiRef>\
      <multiRef id=\"id94\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns49:MetricData\" xmlns:ns49=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89408</metricValue>\
      </multiRef>\
      <multiRef id=\"id82\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns50:MetricData\" xmlns:ns50=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30878</metricValue>\
      </multiRef>\
      <multiRef id=\"id93\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns51:MetricData\" xmlns:ns51=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30873</metricValue>\
      </multiRef>\
      <multiRef id=\"id56\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns52:MetricData\" xmlns:ns52=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23295</metricValue>\
      </multiRef>\
      <multiRef id=\"id113\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns53:MetricData\" xmlns:ns53=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89344</metricValue>\
      </multiRef>\
      <multiRef id=\"id25\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns54:MetricData\" xmlns:ns54=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89340</metricValue>\
      </multiRef>\
      <multiRef id=\"id98\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns55:MetricData\" xmlns:ns55=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61522</metricValue>\
      </multiRef>\
      <multiRef id=\"id117\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns56:MetricData\" xmlns:ns56=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40387</metricValue>\
      </multiRef>\
      <multiRef id=\"id16\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns57:MetricData\" xmlns:ns57=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30853</metricValue>\
      </multiRef>\
      <multiRef id=\"id55\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns58:MetricData\" xmlns:ns58=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49129</metricValue>\
      </multiRef>\
      <multiRef id=\"id35\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns59:MetricData\" xmlns:ns59=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74463</metricValue>\
      </multiRef>\
      <multiRef id=\"id60\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns60:MetricData\" xmlns:ns60=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30868</metricValue>\
      </multiRef>\
      <multiRef id=\"id111\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns61:MetricData\" xmlns:ns61=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23308</metricValue>\
      </multiRef>\
      <multiRef id=\"id54\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns62:MetricData\" xmlns:ns62=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61524</metricValue>\
      </multiRef>\
      <multiRef id=\"id67\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns63:MetricData\" xmlns:ns63=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23273</metricValue>\
      </multiRef>\
      <multiRef id=\"id107\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns64:MetricData\" xmlns:ns64=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42248</metricValue>\
      </multiRef>\
      <multiRef id=\"id57\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns65:MetricData\" xmlns:ns65=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74464</metricValue>\
      </multiRef>\
      <multiRef id=\"id19\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns66:MetricData\" xmlns:ns66=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42256</metricValue>\
      </multiRef>\
      <multiRef id=\"id110\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns67:MetricData\" xmlns:ns67=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49133</metricValue>\
      </multiRef>\
      <multiRef id=\"id78\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns68:MetricData\" xmlns:ns68=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23302</metricValue>\
      </multiRef>\
      <multiRef id=\"id46\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns69:MetricData\" xmlns:ns69=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74459</metricValue>\
      </multiRef>\
      <multiRef id=\"id13\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns70:MetricData\" xmlns:ns70=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74463</metricValue>\
      </multiRef>\
      <multiRef id=\"id58\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns71:MetricData\" xmlns:ns71=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89340</metricValue>\
      </multiRef>\
      <multiRef id=\"id116\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns72:MetricData\" xmlns:ns72=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89411</metricValue>\
      </multiRef>\
      <multiRef id=\"id18\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns73:MetricData\" xmlns:ns73=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40346</metricValue>\
      </multiRef>\
      <multiRef id=\"id65\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns74:MetricData\" xmlns:ns74=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61520</metricValue>\
      </multiRef>\
      <multiRef id=\"id85\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns75:MetricData\" xmlns:ns75=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42291</metricValue>\
      </multiRef>\
      <multiRef id=\"id53\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns76:MetricData\" xmlns:ns76=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92978</metricValue>\
      </multiRef>\
      <multiRef id=\"id33\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns77:MetricData\" xmlns:ns77=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49128</metricValue>\
      </multiRef>\
      <multiRef id=\"id77\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns78:MetricData\" xmlns:ns78=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49130</metricValue>\
      </multiRef>\
      <multiRef id=\"id84\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns79:MetricData\" xmlns:ns79=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40378</metricValue>\
      </multiRef>\
      <multiRef id=\"id62\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns80:MetricData\" xmlns:ns80=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40365</metricValue>\
      </multiRef>\
      <multiRef id=\"id27\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns81:MetricData\" xmlns:ns81=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30863</metricValue>\
      </multiRef>\
      <multiRef id=\"id31\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns82:MetricData\" xmlns:ns82=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92983</metricValue>\
      </multiRef>\
      <multiRef id=\"id112\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns83:MetricData\" xmlns:ns83=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74468</metricValue>\
      </multiRef>\
      <multiRef id=\"id83\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns84:MetricData\" xmlns:ns84=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89408</metricValue>\
      </multiRef>\
      <multiRef id=\"id39\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns85:MetricData\" xmlns:ns85=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89406</metricValue>\
      </multiRef>\
      <multiRef id=\"id30\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns86:MetricData\" xmlns:ns86=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42270</metricValue>\
      </multiRef>\
      <multiRef id=\"id109\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns87:MetricData\" xmlns:ns87=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61528</metricValue>\
      </multiRef>\
      <multiRef id=\"id104\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns88:MetricData\" xmlns:ns88=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30848</metricValue>\
      </multiRef>\
      <multiRef id=\"id106\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns89:MetricData\" xmlns:ns89=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40339</metricValue>\
      </multiRef>\
      <multiRef id=\"id99\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns90:MetricData\" xmlns:ns90=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49127</metricValue>\
      </multiRef>\
      <multiRef id=\"id26\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns91:MetricData\" xmlns:ns91=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49486</metricValue>\
      </multiRef>\
      <multiRef id=\"id92\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns92:MetricData\" xmlns:ns92=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49502</metricValue>\
      </multiRef>\
      <multiRef id=\"id28\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns93:MetricData\" xmlns:ns93=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89407</metricValue>\
      </multiRef>\
      <multiRef id=\"id32\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns94:MetricData\" xmlns:ns94=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61523</metricValue>\
      </multiRef>\
      <multiRef id=\"id95\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns95:MetricData\" xmlns:ns95=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40372</metricValue>\
      </multiRef>\
      <multiRef id=\"id44\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns96:MetricData\" xmlns:ns96=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49124</metricValue>\
      </multiRef>\
      <multiRef id=\"id68\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns97:MetricData\" xmlns:ns97=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74460</metricValue>\
      </multiRef>\
      <multiRef id=\"id71\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns98:MetricData\" xmlns:ns98=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30841</metricValue>\
      </multiRef>\
      <multiRef id=\"id100\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns99:MetricData\" xmlns:ns99=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23279</metricValue>\
      </multiRef>\
      <multiRef id=\"id114\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns100:MetricData\" xmlns:ns100=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49520</metricValue>\
      </multiRef>\
      <multiRef id=\"id63\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns101:MetricData\" xmlns:ns101=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42277</metricValue>\
      </multiRef>\
      <multiRef id=\"id37\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns102:MetricData\" xmlns:ns102=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49479</metricValue>\
      </multiRef>\
      <multiRef id=\"id11\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns103:MetricData\" xmlns:ns103=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49128</metricValue>\
      </multiRef>\
      <multiRef id=\"id38\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns104:MetricData\" xmlns:ns104=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30858</metricValue>\
      </multiRef>\
      <multiRef id=\"id115\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns105:MetricData\" xmlns:ns105=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\30885</metricValue>\
      </multiRef>\
      <multiRef id=\"id23\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns106:MetricData\" xmlns:ns106=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23292</metricValue>\
      </multiRef>\
      <multiRef id=\"id119\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns107:MetricData\" xmlns:ns107=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92987</metricValue>\
      </multiRef>\
      <multiRef id=\"id90\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns108:MetricData\" xmlns:ns108=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74465</metricValue>\
      </multiRef>\
      <multiRef id=\"id103\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns109:MetricData\" xmlns:ns109=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49463</metricValue>\
      </multiRef>\
      <multiRef id=\"id24\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns110:MetricData\" xmlns:ns110=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74464</metricValue>\
      </multiRef>\
      <multiRef id=\"id40\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns111:MetricData\" xmlns:ns111=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40352</metricValue>\
      </multiRef>\
      <multiRef id=\"id45\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns112:MetricData\" xmlns:ns112=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23269</metricValue>\
      </multiRef>\
      <multiRef id=\"id34\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns113:MetricData\" xmlns:ns113=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\23288</metricValue>\
      </multiRef>\
      <multiRef id=\"id47\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns114:MetricData\" xmlns:ns114=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89335</metricValue>\
      </multiRef>\
      <multiRef id=\"id72\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns115:MetricData\" xmlns:ns115=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\89403</metricValue>\
      </multiRef>\
      <multiRef id=\"id22\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns116:MetricData\" xmlns:ns116=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49129</metricValue>\
      </multiRef>\
      <multiRef id=\"id51\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns117:MetricData\" xmlns:ns117=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\40317</metricValue>\
      </multiRef>\
      <multiRef id=\"id87\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns118:MetricData\" xmlns:ns118=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\61525</metricValue>\
      </multiRef>\
      <multiRef id=\"id81\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns119:MetricData\" xmlns:ns119=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\49511</metricValue>\
      </multiRef>\
      <multiRef id=\"id86\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns120:MetricData\" xmlns:ns120=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\92984</metricValue>\
      </multiRef>\
      <multiRef id=\"id101\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns121:MetricData\" xmlns:ns121=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\74462</metricValue>\
      </multiRef>\
      <multiRef id=\"id41\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns122:MetricData\" xmlns:ns122=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">\kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">\JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">\257</metricType>\
         <metricValue xsi:type=\"xsd:string\">\42263</metricValue>\
      </multiRef>\
   </soapenv:Body>\
</soapenv:Envelope>";
*/
var soap ="<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\
   <soapenv:Body>\
      <ns1:getMetricDataResponse soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xmlns:ns1=\"http://metricsdata.webservicesimpl.server.introscope.wily.com\">\
         <getMetricDataReturn soapenc:arrayType=\"ns2:TimesliceGroupedMetricData[1]\" xsi:type=\"soapenc:Array\" xmlns:ns2=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
            <getMetricDataReturn href=\"#id0\"/>\
         </getMetricDataReturn>\
      </ns1:getMetricDataResponse>\
      <multiRef id=\"id0\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns3:TimesliceGroupedMetricData\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\" xmlns:ns3=\"urn:ca.wily.introscope.webservices\">\
         <metricData soapenc:arrayType=\"ns3:MetricData[11]\" xsi:type=\"soapenc:Array\">\
            <metricData href=\"#id1\"/>\
            <metricData href=\"#id2\"/>\
            <metricData href=\"#id3\"/>\
            <metricData href=\"#id4\"/>\
            <metricData href=\"#id5\"/>\
            <metricData href=\"#id6\"/>\
            <metricData href=\"#id7\"/>\
            <metricData href=\"#id8\"/>\
            <metricData href=\"#id9\"/>\
            <metricData href=\"#id10\"/>\
            <metricData href=\"#id11\"/>\
         </metricData>\
         <timesliceEndTime xsi:type=\"xsd:dateTime\">2014-03-10T11:59:45.000Z</timesliceEndTime>\
         <timesliceStartTime xsi:type=\"xsd:dateTime\">2014-03-10T11:58:45.000Z</timesliceStartTime>\
      </multiRef>\
      <multiRef id=\"id10\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns4:MetricData\" xmlns:ns4=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl12519q|Tomcat|tif_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">49442</metricValue>\
      </multiRef>\
      <multiRef id=\"id6\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns5:MetricData\" xmlns:ns5=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl12519q|Tomcat|mosaic_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">74459</metricValue>\
      </multiRef>\
      <multiRef id=\"id11\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns6:MetricData\" xmlns:ns6=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl1251ay|Tomcat|mosaic_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10005|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">89402</metricValue>\
      </multiRef>\
      <multiRef id=\"id2\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns7:MetricData\" xmlns:ns7=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl1251ay|Tomcat|cms-rest_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">23269</metricValue>\
      </multiRef>\
      <multiRef id=\"id5\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns8:MetricData\" xmlns:ns8=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl12519q|Tomcat|cms-rest_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">49124</metricValue>\
      </multiRef>\
      <multiRef id=\"id3\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns9:MetricData\" xmlns:ns9=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl1251ay|Tomcat|tif_b_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10002|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">40317</metricValue>\
      </multiRef>\
      <multiRef id=\"id1\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns10:MetricData\" xmlns:ns10=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl1251ay|Tomcat|cms-rest_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10003|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">61519</metricValue>\
      </multiRef>\
      <multiRef id=\"id9\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns11:MetricData\" xmlns:ns11=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl1251ay|Tomcat|tif_a_le_kl1251ay_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">89335</metricValue>\
      </multiRef>\
      <multiRef id=\"id8\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns12:MetricData\" xmlns:ns12=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl12519q|Tomcat|cms-rest_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10004|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">30836</metricValue>\
      </multiRef>\
      <multiRef id=\"id4\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns13:MetricData\" xmlns:ns13=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl12519q|Tomcat|tif_a_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10001|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">92978</metricValue>\
      </multiRef>\
      <multiRef id=\"id7\" soapenc:root=\"0\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xsi:type=\"ns14:MetricData\" xmlns:ns14=\"urn:ca.wily.introscope.webservices\" xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\">\
         <agentName xsi:type=\"xsd:string\">kl12519q|Tomcat|mosaic_b_le_kl12519q_server_1</agentName>\
         <metricName xsi:type=\"xsd:string\">JMX|Catalina|name=http-bio-0.0.0.0-10006|type=GlobalRequestProcessor:requestCount</metricName>\
         <metricType xsi:type=\"xsd:int\">257</metricType>\
         <metricValue xsi:type=\"xsd:string\">42232</metricValue>\
      </multiRef>\
   </soapenv:Body>\
</soapenv:Envelope>";

http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write(utf8.encode(soap));
response.end();
}).listen(8888);
