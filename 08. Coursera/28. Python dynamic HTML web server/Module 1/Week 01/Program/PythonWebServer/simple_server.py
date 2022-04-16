import http.server

class CGIRequestHandler(http.server.CGIHTTPRequestHandler):
    def do_GET(self):
        return http.server.CGIHTTPRequestHandler.do_GET(self)


handler = CGIRequestHandler

PORT = 8000

server = http.server.HTTPServer(("", PORT), handler)
server.serve_forever()