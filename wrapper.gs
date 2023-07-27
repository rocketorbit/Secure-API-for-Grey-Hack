getAPI = function(metaxploit)
    if typeof(metaxploit) != "metaxploit" then return print("metaxploit required for api to work.")
    netSession = metaxploit.net_use("xxx.xxx.xxx.xxx", 22)
    if not netSession then return print("server unreachable.")
    metaLib = netSession.dump_lib
    if not metaLib then return print("server unreachable.")
    remoteShell = metaLib.overflow("0xFFFFFFFF", "guest_shell")
    if typeof(remoteShell) != "shell" then return print("server unreachable.")
    api = {}
    api.classID = "api"
    api.connection = remoteShell

    //all api method start
    api.testConnection = function //demo method.
        interface = get_custom_object
        interface.args = ["testConnection"]
        self.connection.launch("/root/interface")
        if indexOf(interface, "ret") == null then return false
        if @interface.ret isa funcRef or @interface.ret isa map then return false
        return true
    end function
    //all api method end

    return api
end function