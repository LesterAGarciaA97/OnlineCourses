--
-- File generated with SQLiteStudio v3.2.1 on Sun Jun 21 15:15:38 2020
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Customer
DROP TABLE IF EXISTS Customer;

CREATE TABLE Customer (
    CustNum    INTEGER        PRIMARY KEY,
    CustLName  CHAR (25)      NOT NULL,
    CustFName  CHAR (25)      NOT NULL,
    CustBalDue DECIMAL (8, 2) 
);

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4100,
                         'Lopez',
                         'Lee',
                         249.99
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4200,
                         'Bell',
                         'Charles',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4300,
                         'Danzig',
                         'Charlissa',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4400,
                         'Danzig',
                         'Veronica',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4500,
                         'Valenzuela',
                         'Ana',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4600,
                         'Arthur',
                         'Curtis',
                         249.99
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4700,
                         'Lee',
                         'Mike',
                         249.99
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4800,
                         'Terrell',
                         'Terry',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4900,
                         'DesJarlais',
                         'Monique',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4950,
                         'DesJarlais',
                         'Pierre',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4960,
                         'DesJarlais',
                         'Michel',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4980,
                         'Tubbs',
                         'Robert',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4985,
                         'Chris',
                         'Vernon',
                         100
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         4990,
                         'Chris',
                         'Avril',
                         100
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         5000,
                         'Wojcik',
                         'Deb',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         5050,
                         'Solberg',
                         'Tor',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         5100,
                         'Bellini',
                         'Antonio',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         5200,
                         'Bellini',
                         'Ana',
                         0
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         5300,
                         'Archibald',
                         'Cindy Sue',
                         100
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         5350,
                         'Zucker',
                         'Wendy',
                         100
                     );

INSERT INTO Customer (
                         CustNum,
                         CustLName,
                         CustFName,
                         CustBalDue
                     )
                     VALUES (
                         5400,
                         'Pulaski',
                         'Paulina',
                         100
                     );


-- Table: Event
DROP TABLE IF EXISTS Event;

CREATE TABLE Event (
    EventID       INTEGER       PRIMARY KEY,
    EventTime     TIME,
    EventLocation VARCHAR (100),
    EventDate     DATE,
    EventTourID   CHAR (4),
    FOREIGN KEY (
        EventTourID
    )
    REFERENCES Tour (TourID) 
);

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2019001,
                      1300,
                      'Gunflint Trail',
                      '2020/01/15',
                      'CX01'
                  );

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2019002,
                      1100,
                      'Gunflint Trail',
                      '2020/02/15',
                      'CX01'
                  );

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2019003,
                      1100,
                      'Gunflint Trail',
                      '2019/12/28',
                      'CX01'
                  );

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2020001,
                      900,
                      'Grand Marais',
                      '2020/08/22',
                      'K001'
                  );

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2020002,
                      900,
                      'Grand Marais',
                      '2020/08/27',
                      'K001'
                  );

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2020004,
                      800,
                      'Brainerd',
                      '2020/05/22',
                      'B001'
                  );

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2020005,
                      800,
                      'Walker',
                      '2020/06/01',
                      'B003'
                  );

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2020006,
                      1300,
                      'Brainerd',
                      '2020/07/05',
                      'B001'
                  );

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2020007,
                      1000,
                      'GrandMarais',
                      '2020/07/06',
                      'K001'
                  );

INSERT INTO Event (
                      EventID,
                      EventTime,
                      EventLocation,
                      EventDate,
                      EventTourID
                  )
                  VALUES (
                      2020008,
                      1300,
                      'GrandMarais',
                      '2020/07/05',
                      'K002'
                  );


-- Table: Guide
DROP TABLE IF EXISTS Guide;

CREATE TABLE Guide (
    GuideID       CHAR (3)  PRIMARY KEY,
    GuideLName    CHAR (25) NOT NULL,
    GuideFName    CHAR (25) NOT NULL,
    GuideHireDate DATE,
    GuideExpLevel INTEGER
);

INSERT INTO Guide (
                      GuideID,
                      GuideLName,
                      GuideFName,
                      GuideHireDate,
                      GuideExpLevel
                  )
                  VALUES (
                      '100',
                      'Smith',
                      'Jo',
                      '2019/04/11',
                      9
                  );

INSERT INTO Guide (
                      GuideID,
                      GuideLName,
                      GuideFName,
                      GuideHireDate,
                      GuideExpLevel
                  )
                  VALUES (
                      '200',
                      'Xiong',
                      'Kay',
                      '2019/04/15',
                      7
                  );

INSERT INTO Guide (
                      GuideID,
                      GuideLName,
                      GuideFName,
                      GuideHireDate,
                      GuideExpLevel
                  )
                  VALUES (
                      '300',
                      'Swenson',
                      'Bjorn',
                      '2020/02/14',
                      7
                  );


-- Table: Schedule
DROP TABLE IF EXISTS Schedule;

CREATE TABLE Schedule (
    SchedCustNum INTEGER,
    SchedEventID INTEGER,
    PRIMARY KEY (
        SchedCustNum,
        SchedEventID
    )
);

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4100,
                         2020001
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4600,
                         2020001
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4700,
                         2020001
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4200,
                         2020002
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4300,
                         2019001
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4400,
                         2019001
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4500,
                         2019002
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4950,
                         2019003
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4960,
                         2019003
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4980,
                         2019003
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5000,
                         2020004
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4900,
                         2019003
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4800,
                         2020004
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4985,
                         2020006
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4990,
                         2020006
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5000,
                         2020007
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5050,
                         2020007
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5100,
                         2020004
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5200,
                         2020004
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5300,
                         2020005
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5350,
                         2020005
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5400,
                         2020005
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4600,
                         2020002
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5050,
                         2019001
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5050,
                         2019002
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5050,
                         2019003
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5300,
                         2020006
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5350,
                         2020006
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         5400,
                         2020001
                     );

INSERT INTO Schedule (
                         SchedCustNum,
                         SchedEventID
                     )
                     VALUES (
                         4200,
                         2020005
                     );


-- Table: Tour
DROP TABLE IF EXISTS Tour;

CREATE TABLE Tour (
    TourID          CHAR (4)       PRIMARY KEY,
    TourPrice       DECIMAL (8, 2),
    TourDuration    DECIMAL (6, 2),
    TourDescription VARCHAR (240),
    TourGuideID     CHAR (3),
    FOREIGN KEY (
        TourGuideID
    )
    REFERENCES Guide (GuideID) 
);

INSERT INTO Tour (
                     TourID,
                     TourPrice,
                     TourDuration,
                     TourDescription,
                     TourGuideID
                 )
                 VALUES (
                     'K001',
                     349.99,
                     8,
                     'Kayak the shores of Lake Superior. Gourmet lunch is provided.',
                     '100'
                 );

INSERT INTO Tour (
                     TourID,
                     TourPrice,
                     TourDuration,
                     TourDescription,
                     TourGuideID
                 )
                 VALUES (
                     'K002',
                     150,
                     4,
                     'Kayak Deviltrack Lake. Includes kayak and transportation from Grand Marais.',
                     '100'
                 );

INSERT INTO Tour (
                     TourID,
                     TourPrice,
                     TourDuration,
                     TourDescription,
                     TourGuideID
                 )
                 VALUES (
                     'CX01',
                     80,
                     2,
                     'Ski the back country! Nordic skiis and boots provided.',
                     '300'
                 );

INSERT INTO Tour (
                     TourID,
                     TourPrice,
                     TourDuration,
                     TourDescription,
                     TourGuideID
                 )
                 VALUES (
                     'B001',
                     125.99,
                     4,
                     'Bike Section 1 of the Paul Bunyan Trail! Includes pick up at Backus and return to Brainerd.',
                     '200'
                 );

INSERT INTO Tour (
                     TourID,
                     TourPrice,
                     TourDuration,
                     TourDescription,
                     TourGuideID
                 )
                 VALUES (
                     'B003',
                     149.99,
                     7,
                     'Bike Section 3 of the Paul Bunyan Trail! Includes pick up at Walker, dinner, and return to Bemidji.',
                     '200'
                 );


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
