getAPI = function(metaxploit)
    recursiveCheck = function(anyObject, maxDepth = -1)
        if maxDepth == 0 then return true
        if @anyObject isa map or @anyObject isa list then
            for key in indexes(@anyObject)
                if not recursiveCheck(@key, maxDepth - 1) then return false
            end for
            for val in values(@anyObject)
                if not recursiveCheck(@val, maxDepth - 1) then return false
            end for
        end if
        if @anyObject isa funcRef then return false
        return true
    end function

    if typeof(metaxploit) != "MetaxploitLib" then return print("metaxploit required for api to work.")
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
        if not hasIndex(interface, "ret") then return false
        if not recursiveCheck(@interface.ret) then return false
        return @interface.ret
    end function
    //all api method end

    return api
end function