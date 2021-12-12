import _ from 'lodash'
import { Reducer } from 'redux'
import AES from '../../../Security/AES'
import { DataAction } from './DataActions'
import { DataConstants } from './DataConstants'

const testData = [{ "id": "149jYg7rJokMXmcQbL9Xn6yH3DY7vAsitj", "name": "Flem", "user": "MacTrustram", "pass": "fmactrustram0@bloglovin.com", "url": "https://hp.com", "encrypted": "5.119.200.17" },
{ "id": "1K7yQxXRhHPYUTzdEBv4QBomwNsY2R8Nvd", "name": "Desmond", "user": "Draisey", "pass": "ddraisey1@wordpress.org", "url": "https://usa.gov", "encrypted": "23.225.3.54" },
{ "id": "1AqfKXSVAx9onnB55UfkbihFykJrZPC4w2", "name": "Osgood", "user": "Weekly", "pass": "oweekly2@nasa.gov", "url": "http://blogspot.com", "encrypted": "162.30.81.187" },
{ "id": "1NK1scBM2m6atZX22wQCLrgqeRSf87fpwx", "name": "Lexie", "user": "Baldrey", "pass": "lbaldrey3@stanford.edu", "url": "http://rambler.ru", "encrypted": "129.17.135.206" },
{ "id": "1AnLq1NbUQRGUzwM7TZHseASnmLXhAMQd7", "name": "Ardra", "user": "Gheerhaert", "pass": "agheerhaert4@parallels.com", "url": "http://free.fr", "encrypted": "122.195.245.97" },
{ "id": "129bym7b4XSNe3hsqyeCUg4RWfbDmywJbh", "name": "Karlene", "user": "Fabry", "pass": "kfabry5@i2i.jp", "url": "http://marketwatch.com", "encrypted": "109.192.66.252" },
{ "id": "1c3uSCZQaXzTKGrAtMawaJRYV8JGcmGx5", "name": "Eamon", "user": "Maggill'Andreis", "pass": "emaggillandreis6@latimes.com", "url": "https://patch.com", "encrypted": "249.210.205.1" },
{ "id": "1EnNywEkcY9v1XNUF6MTeR86s8J9TWEasc", "name": "Linnea", "user": "Luchetti", "pass": "lluchetti7@mac.com", "url": "https://infoseek.co.jp", "encrypted": "158.110.142.129" },
{ "id": "1DJuhuNdsRz8qnPMEurEd3Fw637YDwcDuZ", "name": "Cloris", "user": "Lescop", "pass": "clescop8@zimbio.com", "url": "https://hostgator.com", "encrypted": "139.8.212.84" },
{ "id": "1tGxyHP6kvygydFRZ3Z1PhG5XBBsev78N", "name": "Margeaux", "user": "Toombes", "pass": "mtoombes9@xrea.com", "url": "https://devhub.com", "encrypted": "212.223.144.10" },
{ "id": "1FuvL5cga453WDPVtKeymJuhLDr3kmxWdW", "name": "Cherry", "user": "Grimwad", "pass": "cgrimwada@squidoo.com", "url": "https://cbslocal.com", "encrypted": "121.54.153.91" },
{ "id": "1LqCfP4ySSvMToquYAa5NgYoJqqBXn53S", "name": "Jefferey", "user": "Calderon", "pass": "jcalderonb@biglobe.ne.jp", "url": "https://jimdo.com", "encrypted": "176.72.65.193" },
{ "id": "14hYq6cmFwfQKp2iXpSkAPCEMTG3QyDyUE", "name": "Marguerite", "user": "Gemnett", "pass": "mgemnettc@a8.net", "url": "https://ucla.edu", "encrypted": "56.124.232.30" },
{ "id": "1EwMpQ1jeB6Gv7hTeKZbLra7HyfuvmpZiq", "name": "Andeee", "user": "Crosi", "pass": "acrosid@wp.com", "url": "https://yale.edu", "encrypted": "46.59.125.233" },
{ "id": "1M6STheCSSGxDV6NbMhdj6caA2VCEUaWvv", "name": "Seamus", "user": "Cordey", "pass": "scordeye@chron.com", "url": "http://bigcartel.com", "encrypted": "202.167.232.225" },
{ "id": "1D3ghh5aJruamG2vxRyVfCSJppWYHhrKE8", "name": "Cletis", "user": "Kezourec", "pass": "ckezourecf@vinaora.com", "url": "https://seattletimes.com", "encrypted": "133.252.51.141" },
{ "id": "14eKYNDrFD4pT26zvcMXBaMa64CYWMNhQh", "name": "Gerladina", "user": "Cready", "pass": "gcreadyg@vinaora.com", "url": "https://netvibes.com", "encrypted": "23.251.6.161" },
{ "id": "16BGkdtyMi9SLcYp4Qn2JLUKTKVHZWBupv", "name": "Dorrie", "user": "Giovannacc@i", "pass": "dgiovannaccih@angelfire.com", "url": "https://symantec.com", "encrypted": "166.224.154.22" },
{ "id": "12EJaTEHrpKc3Dy5p9e6opqwwGDBBfna1W", "name": "Milli", "user": "Lehr", "pass": "mlehri@blogspot.com", "url": "https://oracle.com", "encrypted": "223.200.182.183" },
{ "id": "17eJT79sJrbUcr988JXycLPKmBifV5yu5t", "name": "Ernesto", "user": "McFee", "pass": "emcfeej@alibaba.com", "url": "https://etsy.com", "encrypted": "68.74.203.37" },
{ "id": "1J4jMEKtac5tQ9NS95bh5wdyStQqXYwFGs", "name": "Johannah", "user": "Leeds", "pass": "jleedsk@rakuten.co.jp", "url": "https://mediafire.com", "encrypted": "86.212.240.91" },
{ "id": "1Mds2cpDUnF9gvpBj2ntWPDDSFrMqmL7xz", "name": "Yard", "user": "Scuse", "pass": "yscusel@stumbleupon.com", "url": "http://prnewswire.com", "encrypted": "224.163.217.147" },
{ "id": "1612v69kjMdEvovfQBh7mE9vrEn8qJ6Mmj", "name": "Perkin", "user": "Prestie", "pass": "pprestiem@wsj.com", "url": "https://omniture.com", "encrypted": "155.119.178.180" },
{ "id": "1KpB5TLnDfzQtJApEv6N47gjFyvc89U1NP", "name": "Vonni", "user": "Herrieven", "pass": "vherrievenn@tamu.edu", "url": "https://go.com", "encrypted": "56.54.33.255" },
{ "id": "12he99fG9uoGnsEKNCuLDCAtUT2bKeJxhy", "name": "Audry", "user": "Wardhaw", "pass": "awardhawo@freewebs.com", "url": "http://istockphoto.com", "encrypted": "216.249.208.76" },
{ "id": "1NMKmbnxyz4hFRkgCrjQrPQfFchwUkDgFh", "name": "Keely", "user": "Ferrarone", "pass": "kferraronep@purevolume.com", "url": "http://elegantthemes.com", "encrypted": "178.76.237.27" },
{ "id": "1G9BXqJ6ZY1YbfJiiNTVvvukEf3S3kHabZ", "name": "Lilly", "user": "Simanek", "pass": "lsimanekq@weibo.com", "url": "https://unesco.org", "encrypted": "178.37.107.234" },
{ "id": "1HiMRKNWtuWqPY8GrFCLzxF2bbSjtD9KDk", "name": "Mirilla", "user": "Mardlin", "pass": "mmardlinr@de.vu", "url": "http://wired.com", "encrypted": "5.29.114.107" },
{ "id": "14zAiCakJf3hqh8oFYDgLkFwXiSXQ8YFh6", "name": "Raye", "user": "Have", "pass": "rhaves@elpais.com", "url": "http://hugedomains.com", "encrypted": "213.167.120.12" },
{ "id": "1c5ZrTELeLPGqzbz6PayZwvMNXLi38tFS", "name": "Eran", "user": "Hearnaman", "pass": "ehearnamant@dell.com", "url": "https://simplemachines.org", "encrypted": "114.146.94.42" },
{ "id": "1N2UyuDKaJp9aVS2B8p4sb3NpormwunQej", "name": "Candra", "user": "Mattecot", "pass": "cmattecotu@si.edu", "url": "http://seesaa.net", "encrypted": "88.80.73.31" },
{ "id": "1NEpLqHoPu1TUKnaio21NipJyY2mTx684E", "name": "Delmore", "user": "Rudyard", "pass": "drudyardv@xrea.com", "url": "http://lycos.com", "encrypted": "110.98.204.59" },
{ "id": "1XryixTz47N66DneBUHTGaXkZr8SnCh8F", "name": "Ynez", "user": "Dagworthy", "pass": "ydagworthyw@weather.com", "url": "http://narod.ru", "encrypted": "112.162.33.79" },
{ "id": "1HAhbi5qKqrpugTeYHfBfprs23qu77puek", "name": "Anabelle", "user": "Cavaney", "pass": "acavaneyx@webnode.com", "url": "http://google.cn", "encrypted": "212.113.128.61" },
{ "id": "1BrRsD9WcLHPq3jqus4WUW5SpvRCKJe7jd", "name": "Bernadine", "user": "Roze", "pass": "brozey@technorati.com", "url": "https://elpais.com", "encrypted": "238.70.144.82" },
{ "id": "19fXMkuumyZX2caqwiM8wAcZvWGndN4tdS", "name": "Adams", "user": "Collens", "pass": "acollensz@google.de", "url": "http://howstuffworks.com", "encrypted": "178.10.235.71" },
{ "id": "12Q5w4vGZdrD4f3otPzJHCgDnBjmd4aSsc", "name": "Birch", "user": "Hubbis", "pass": "bhubbis10@issuu.com", "url": "https://comcast.net", "encrypted": "24.97.233.218" },
{ "id": "19rzSx2GxjZ4hv8L4x9r7oLLtKiuwxSfXM", "name": "Ludovika", "user": "Marshland", "pass": "lmarshland11@paginegialle.it", "url": "https://alexa.com", "encrypted": "127.19.240.231" },
{ "id": "15HMkhZ7YnbwaA6dgBQq3hz7o2cC5eZRyS", "name": "Durante", "user": "Melwall", "pass": "dmelwall12@rediff.com", "url": "https://dion.ne.jp", "encrypted": "171.96.19.241" },
{ "id": "19E8b25tCE7nhqBdia1FWsjYZVBmo9XSXR", "name": "Teirtza", "user": "Burnside", "pass": "tburnside13@tuttocitta.it", "url": "http://1und1.de", "encrypted": "17.238.119.209" },
{ "id": "1N7qu9g25Wjjk9A5yLYmME6PHVTvenM5jG", "name": "Priscilla", "user": "Leydon", "pass": "pleydon14@unc.edu", "url": "http://phoca.cz", "encrypted": "163.79.64.218" },
{ "id": "1DoNMnAgoQAR7ixKHQYgWx7EX6cp9kyuNg", "name": "Mile", "user": "Wooddisse", "pass": "mwooddisse15@weather.com", "url": "https://npr.org", "encrypted": "182.133.243.46" },
{ "id": "16FxUPKRrsmn5PVKj8fTSHd8oZ98UGHge9", "name": "Jesus", "user": "Mazzey", "pass": "jmazzey16@a8.net", "url": "https://nationalgeographic.com", "encrypted": "69.237.127.10" },
{ "id": "18cbnbx9zNmLLDQfPRmN8EnhRxBoVL4wRS", "name": "Berry", "user": "Barkshire", "pass": "bbarkshire17@printfriendly.com", "url": "http://icq.com", "encrypted": "40.131.159.150" },
{ "id": "1JQ3a3YsFBnX6riTvxC1At43fwPTHvNqw", "name": "Ennis", "user": "Ostridge", "pass": "eostridge18@amazon.co.jp", "url": "http://fema.gov", "encrypted": "133.83.25.74" },
{ "id": "1D4WBuwJ4Y5k7TdDqgDJ3x21jVrKCm8bbg", "name": "Phyllis", "user": "Lipscombe", "pass": "plipscombe19@eepurl.com", "url": "https://paypal.com", "encrypted": "152.116.213.37" },
{ "id": "13AC4UjAN2gyUcMpr9ErYr7TtfcNSFeFnd", "name": "Susanna", "user": "Yockney", "pass": "syockney1a@tumblr.com", "url": "http://istockphoto.com", "encrypted": "81.64.19.92" },
{ "id": "1BNLYobSc5uVvZad8rhpzBNsDM3i3TadMw", "name": "Algernon", "user": "Liven", "pass": "aliven1b@aol.com", "url": "https://ycombinator.com", "encrypted": "82.71.123.200" },
{ "id": "18aP1hF4JZsrrBX8V25oKo7ER81B87rsLj", "name": "Sidonnie", "user": "Pont", "pass": "spont1c@amazon.co.uk", "url": "http://ovh.net", "encrypted": "3.95.25.16" },
{ "id": "1MQLyQDSWbEMq2EHbVoxYss2M5rQwdo4UH", "name": "Brook", "user": "Whitear", "pass": "bwhitear1d@stanford.edu", "url": "https://disqus.com", "encrypted": "180.3.27.84" },
{ "id": "1HBhT3pnAjWK4yT5caWWuLyFMPjy1wyAcB", "name": "Foss", "user": "Vedenyapin", "pass": "fvedenyapin1e@state.tx.us", "url": "http://flavors.me", "encrypted": "6.143.64.183" },
{ "id": "1DP3SH2CyA9J4wUQkwFaJ7jj2kEU4J6eVq", "name": "Randolf", "user": "Collingham", "pass": "rcollingham1f@acquirethisname.com", "url": "https://quantcast.com", "encrypted": "110.238.101.142" },
{ "id": "1FzC3aDcGch8Yu5GXYrVod9w3R6zTEAiff", "name": "Whit", "user": "Dat", "pass": "wdat1g@eventbrite.com", "url": "https://seattletimes.com", "encrypted": "116.98.235.177" },
{ "id": "1ZzAj4fbSEXhk31cqkP88oTh5wzQ3kdbB", "name": "Ernestus", "user": "Benbow", "pass": "ebenbow1h@joomla.org", "url": "http://google.fr", "encrypted": "57.212.21.208" },
{ "id": "15c3Z37LoDQerEf3DpQaJA3TkpndN12UnB", "name": "Leanna", "user": "Briffett", "pass": "lbriffett1i@sphinn.com", "url": "http://wikia.com", "encrypted": "226.251.250.91" },
{ "id": "1B9PPGbkNvfpHEc43qMoLMrYEwKPzRYxLx", "name": "Mia", "user": "MacConnal", "pass": "mmacconnal1j@paypal.com", "url": "http://ameblo.jp", "encrypted": "72.56.241.176" },
{ "id": "1CyC6QBowmQkoXdoqxF49YZMmncM4AiMKh", "name": "Patrizia", "user": "Cowling", "pass": "pcowling1k@nytimes.com", "url": "https://etsy.com", "encrypted": "112.18.2.173" },
{ "id": "1NhvYhdWU9YpK7CQwU7PMfxT9rVcEfS5aW", "name": "Urson", "user": "Buesden", "pass": "ubuesden1l@pen.io", "url": "http://usnews.com", "encrypted": "148.165.66.201" },
{ "id": "121KKnuy34L8L7ZoGy6Ksvav9R4fpgRZxD", "name": "Felicia", "user": "Mollnar", "pass": "fmollnar1m@slideshare.net", "url": "http://shutterfly.com", "encrypted": "19.195.72.236" },
{ "id": "1Cib7yB3p4jNxTKS8tmR82Hzcwy4YwVAfA", "name": "Dionisio", "user": "Kobiela", "pass": "dkobiela1n@sphinn.com", "url": "https://spotify.com", "encrypted": "77.213.255.118" },
{ "id": "1PqexSHdpYZ5gxL7EG1vrfmp1uojU4Lx8F", "name": "Bartholomew", "user": "Keeting", "pass": "bkeeting1o@usatoday.com", "url": "http://timesonline.co.uk", "encrypted": "205.193.196.141" },
{ "id": "1HKT97yTYMgQ4T8nTzWJwroFPEW45nZ9n7", "name": "Stefa", "user": "Wolfendale", "pass": "swolfendale1p@vkontakte.ru", "url": "https://mlb.com", "encrypted": "207.241.171.92" },
{ "id": "1PZiD58yGJEuQtjhbJDgQvmLwvCLTzcXve", "name": "Maurie", "user": "Rozycki", "pass": "mrozycki1q@webs.com", "url": "https://mapquest.com", "encrypted": "82.69.127.207" },
{ "id": "1Bcq6hef2LP8xk57yYK2yzQh68RSE5F5Gg", "name": "Zerk", "user": "Watt", "pass": "zwatt1r@delicious.com", "url": "https://cbc.ca", "encrypted": "7.62.232.243" },
{ "id": "1MECBYJ4rGoficBjYaLSYRQdshkEf12xgB", "name": "Nahum", "user": "Jann", "pass": "njann1s@ca.gov", "url": "https://list-manage.com", "encrypted": "51.74.195.34" },
{ "id": "1PhPbFtB4ExDVC9G3c15JBLaVzrSyQXoyx", "name": "Britte", "user": "Naulls", "pass": "bnaulls1t@nytimes.com", "url": "https://tmall.com", "encrypted": "85.154.236.161" },
{ "id": "16J7FFFigeeEruDRYT39TKoJaFeoxHSjVb", "name": "Michal", "user": "Oldford", "pass": "moldford1u@unblog.fr", "url": "https://google.com.hk", "encrypted": "246.102.233.64" },
{ "id": "1N7eseNbfxjfDn54wzqog7qv1HHrva8gaP", "name": "Joannes", "user": "Dunthorn", "pass": "jdunthorn1v@businessweek.com", "url": "https://bizjournals.com", "encrypted": "97.5.125.222" },
{ "id": "1Q4u8nG6zgjnrTRBp3xaS8wbJ5EvmiWi8W", "name": "Neall", "user": "Haydock", "pass": "nhaydock1w@fda.gov", "url": "http://tripadvisor.com", "encrypted": "238.221.200.159" },
{ "id": "1Mr9vigFf64TtPyjGwMivXeJXRodcPYY4Q", "name": "Koren", "user": "Dennert", "pass": "kdennert1x@ucoz.ru", "url": "http://w3.org", "encrypted": "191.76.112.174" },
{ "id": "1BmuZwr3aSz4hbdToXwe4wVpBGYUVXG3Uj", "name": "Jenna", "user": "Perry", "pass": "jperry1y@bandcamp.com", "url": "https://google.de", "encrypted": "133.83.222.106" },
{ "id": "1JeqHyZgSCJsJd8MLrVUxuZAPM1VcETm9H", "name": "Clarita", "user": "McNeil", "pass": "cmcneil1z@ft.com", "url": "http://wix.com", "encrypted": "34.149.71.202" },
{ "id": "1AHeaNSwkCGPR4oQT5knKvX1EvsF4vL4n3", "name": "Correy", "user": "Bessom", "pass": "cbessom20@salon.com", "url": "http://creativecommons.org", "encrypted": "212.48.116.201" },
{ "id": "1NXxmmrphtyghcfiowdaZRy5keS7VAPkub", "name": "Emma", "user": "Haig", "pass": "ehaig21@addtoany.com", "url": "https://multiply.com", "encrypted": "103.78.26.247" },
{ "id": "1nKV4mZr2Do5PKyXXVfqNtpMtjaSLyrh3", "name": "Huntley", "user": "Ledes", "pass": "hledes22@angelfire.com", "url": "http://apache.org", "encrypted": "253.76.20.170" },
{ "id": "18U7CoAhZofdw49diJd5XYgP8z3y29NATZ", "name": "Dag", "user": "Arthey", "pass": "darthey23@rambler.ru", "url": "http://dell.com", "encrypted": "182.156.170.250" },
{ "id": "1AgnsuKWaBQc7yAf8PHh84vbvhRw8NRqM2", "name": "Vern", "user": "Shankland", "pass": "vshankland24@scribd.com", "url": "https://prweb.com", "encrypted": "38.110.57.12" },
{ "id": "17UZoQhPwYvQowUsJpvDHJNfNRAkKLmynS", "name": "Blinnie", "user": "Upstone", "pass": "bupstone25@cnbc.com", "url": "http://techcrunch.com", "encrypted": "154.97.116.170" },
{ "id": "1DhXQYpYTKhpgiijHCyycfWXRmsvAaiugS", "name": "Tarah", "user": "Polsin", "pass": "tpolsin26@gmpg.org", "url": "http://bandcamp.com", "encrypted": "82.246.160.186" },
{ "id": "1GUBYntXeYHfDTM2LR218CLoMUb9kmUX6t", "name": "Burton", "user": "Biddles", "pass": "bbiddles27@berkeley.edu", "url": "https://wisc.edu", "encrypted": "104.192.173.157" },
{ "id": "1K43TJsdUDH6hTky5dmbjbW5vCtRY7ehuN", "name": "Quintus", "user": "Heyburn", "pass": "qheyburn28@sciencedirect.com", "url": "https://blogtalkradio.com", "encrypted": "215.228.107.66" },
{ "id": "19kMmuHQQerTyUEE4C4Qs3TXXHEhyYqtfS", "name": "Yolanda", "user": "Swannick", "pass": "yswannick29@nih.gov", "url": "https://webmd.com", "encrypted": "255.78.50.89" },
{ "id": "13UWamprrjp8sTiBgtNSjwf7fXF8GN5iE4", "name": "Darcy", "user": "Oppie", "pass": "doppie2a@dyndns.org", "url": "https://deliciousdays.com", "encrypted": "232.141.184.142" },
{ "id": "12LhG3JpxCnt3vdqG1fyPW9C67Jz9kNfoo", "name": "Davin", "user": "Saphir", "pass": "dsaphir2b@parallels.com", "url": "http://sfgate.com", "encrypted": "107.82.49.14" },
{ "id": "1Gsx9m5CiXcDar9KdDUXRfkGhb6M17ST76", "name": "Jone", "user": "Kerwood", "pass": "jkerwood2c@go.com", "url": "https://jugem.jp", "encrypted": "147.100.8.155" },
{ "id": "1G3UYUxptAPJMvi6zv6nrQVKjEFGvCqdwm", "name": "Amalea", "user": "Spackman", "pass": "aspackman2d@about.com", "url": "http://hatena.ne.jp", "encrypted": "146.58.3.139" },
{ "id": "13bxVgu2XzWNRax5JnFKJvQj4FPShathMq", "name": "Francoise", "user": "Kryska", "pass": "fkryska2e@dion.ne.jp", "url": "https://163.com", "encrypted": "92.181.141.244" },
{ "id": "1JVzyUekSY8BKbXRK5U6BqYrAwHsg9LhaU", "name": "Sapphire", "user": "Oxby", "pass": "soxby2f@patch.com", "url": "https://wired.com", "encrypted": "139.66.238.140" },
{ "id": "1uKbeuQCypvYdgn2rPmE4jhS8UmmEfg8L", "name": "Cullan", "user": "O'Hegertie", "pass": "cohegertie2g@washington.edu", "url": "https://discovery.com", "encrypted": "140.93.5.248" },
{ "id": "1FCzQcJVLjLCx758o5RTYfS6aPQqAfmtY6", "name": "Netty", "user": "Izkoveski", "pass": "nizkoveski2h@drupal.org", "url": "http://toplist.cz", "encrypted": "142.32.15.120" },
{ "id": "1Hu9eLSqZUiqJzStPo1BAugDWsxwY11Uqb", "name": "Keriann", "user": "Kinleyside", "pass": "kkinleyside2i@cpanel.net", "url": "http://un.org", "encrypted": "26.244.233.54" },
{ "id": "1AmzQZszBMC6ut3DtAPtRTpjkRpdwMhBhe", "name": "Koral", "user": "Pitherick", "pass": "kpitherick2j@pagesperso-orange.fr", "url": "http://vistaprint.com", "encrypted": "216.152.226.120" },
{ "id": "1PEUCKfQiPA5V5HjhhuxNyF7qDxCj3PSsd", "name": "Jarvis", "user": "Macconachy", "pass": "jmacconachy2k@nps.gov", "url": "http://upenn.edu", "encrypted": "153.73.227.190" },
{ "id": "12xdG8JGVsjWzoMH5RBTbzLTWtum4HPUhg", "name": "Bank", "user": "Van de Castele", "pass": "bvandecastele2l@discuz.net", "url": "http://noaa.gov", "encrypted": "53.3.151.11" },
{ "id": "1NQRp2LcwnSjortDt9vhePb6bxSeMbToUy", "name": "Rowney", "user": "Rodger", "pass": "rrodger2m@de.vu", "url": "http://merriam-webster.com", "encrypted": "142.85.183.248" },
{ "id": "1BfFpj3yv9MGfACTSqPAuDWJ6cFzrFWGXf", "name": "Ingra", "user": "Sloley", "pass": "isloley2n@paginegialle.it", "url": "https://mayoclinic.com", "encrypted": "169.186.71.184" },
{ "id": "1Q16UQHhHArxjqGKRiB7sy8XRiQuGn39nw", "name": "Meg", "user": "Thewlis", "pass": "mthewlis2o@cdc.gov", "url": "https://t.co", "encrypted": "94.143.198.146" },
{ "id": "19qykLypXPE99sEUMiymEchQrviWyrxrYn", "name": "Rosene", "user": "Cutsforth", "pass": "rcutsforth2p@vinaora.com", "url": "https://godaddy.com", "encrypted": "170.187.98.101" },
{ "id": "1EvZm7duuNQD33qvoGHeUA2f1z3hwGFP4T", "name": "Jerrine", "user": "Ivetts", "pass": "jivetts2q@free.fr", "url": "http://dion.ne.jp", "encrypted": "26.100.160.95" },
{ "id": "16mPYETQaX6JoVgMNd6HeCMS1W3Kzgbzt8", "name": "Joell", "user": "Baumler", "pass": "jbaumler2r@sphinn.com", "url": "http://list-manage.com", "encrypted": "15.5.34.96" }]

export interface Entry {
  id: string
  name: string
  user: string
  pass: string
  url: string
  encrypted: string
}

export interface Category {
  entries: Record<string, Entry>
}

export interface DataState {
  Passwords: Record<string, Category>
  Files: Record<string, Category>
  SelectedCategory: string
}

const initialState = (): DataState => {
  const defaultCategory: Category = { entries: {} }
  const defaultCategoryName: string = "General"
  return (
    {
      Passwords: {
        [defaultCategoryName]: defaultCategory
      },
      Files: {
        [defaultCategoryName]: defaultCategory
      },
      SelectedCategory: defaultCategoryName
    }
  )
}

const DataReducer: Reducer<DataState, DataAction> = (state = initialState(), action: DataAction) => {
  switch (action.type) {
    case DataConstants.EntryConstants.CREATE_ENTRY:
      const user = _.get(action, 'entry_user')
      const pass = _.get(action, 'entry_pass', '')
      const url = _.get(action, 'url', '')
      const name = _.get(action, 'name', '')
      const masterPassword = _.get(action, 'masterPassword', '')

      if (user) {
        const id: string = '_' + Math.random().toString(36).substring(2, 16)
        const encrypted = AES.encrypt(JSON.stringify({ id, user, pass, url, name }), masterPassword)
        const newEntry: Entry = { id, user, pass, url, name, encrypted }
        const SelectedCategory: string = state.SelectedCategory
        const newState = _.cloneDeep(state)
        newState.Passwords[SelectedCategory].entries[id] = newEntry
        return newState
      }

      return state
    case DataConstants.CategoryConstants.CHANGE_SELECTED_CATEGORY:
      if (state.SelectedCategory !== action.category_name) {
        const newState = _.cloneDeep(state)
        newState.SelectedCategory = action.category_name
        return newState
      }
      return state
    case DataConstants.CategoryConstants.CREATE_CATEGORY:
      const newState = _.cloneDeep(state)
      newState.Passwords[action.category_name] = { entries: {} }
      return newState
    case 'TEST_DATA':
      const SelectedCategory: string = state.SelectedCategory
      const data: Record<string, Entry> = {}
      Array(...testData).forEach((d: Entry) => {
        data[d.id] = d
      })

      return {
        ...state,
        Passwords: {
          ...state.Passwords,
          [SelectedCategory]: { entries: data }
        }
      }
    default:
      return state
  }

}

export default DataReducer