drop table heRoom;
drop table heBed;
drop table heHospitalization;
drop table heEvents;

CREATE TABLE heRoom
(
  roid serial NOT NULL,
  roname character varying(20),
  roarea character varying(50),
  rostatus character varying(10),
  CONSTRAINT roid PRIMARY KEY (roid)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE heRoom
  OWNER TO postgres;


CREATE TABLE heBed
(
  beid serial NOT NULL,
  bename character varying(20),
  bestatus character varying(10),
  heRoom integer,
  CONSTRAINT beid PRIMARY KEY (beid),
  CONSTRAINT heRoom FOREIGN KEY (heRoom)
      REFERENCES heRoom (roid) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE heBed
  OWNER TO postgres;
  

CREATE TABLE heHospitalization
(
  hoid serial NOT NULL,
  hopatientid character varying(20),
  hopatientname character varying(100),
  heBed integer,
  hostatus character varying(10),
  CONSTRAINT hoid PRIMARY KEY (hoid),
  CONSTRAINT heBed FOREIGN KEY (heBed)
      REFERENCES heBed (beid) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
  
)
WITH (
  OIDS=FALSE
);
ALTER TABLE heHospitalization
  OWNER TO postgres;




CREATE TABLE heEvents
(
  evid serial NOT NULL,
  evstatus character varying(10),
  heHospitalization integer,
  CONSTRAINT evid PRIMARY KEY (evid),
  CONSTRAINT heHospitalization FOREIGN KEY (heHospitalization)
      REFERENCES heHospitalization (hoid) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE heEvents
  OWNER TO postgres;
